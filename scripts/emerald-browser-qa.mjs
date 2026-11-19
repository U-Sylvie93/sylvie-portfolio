import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_PATH || path.join(process.env.USERPROFILE, '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs')).href);
const base = process.env.SMOKE_URL || 'http://localhost:3002';
let activeBrowser;
(async () => {
  const browser = activeBrowser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true });
  const page = await browser.newPage({viewport: {width:1440,height:1000}, reducedMotion:'reduce'});
  page.setDefaultTimeout(60000);
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(base, {waitUntil:'load', timeout:120000});
  await page.locator('.hero-intro').waitFor();
  assert.equal((await page.locator('h1').innerText()).replace(/\s+/g, ' '), 'Umutoniwase Sylvie');
  assert.equal(await page.locator('.project-card').count(), 5);
  assert.equal(await page.locator('.team-project').count(), 1);
  assert.equal(await page.locator('.personal-project').count(), 4);
  assert.equal(await page.locator('.certification-card').count(), 10);
  assert.equal(await page.locator('.technical-certificate').count(), 7);
  assert.equal(await page.locator('.leadership-certificate').count(), 3);
  for (const name of ['Foundational C# with Microsoft', 'Responsive Web Design', 'Python Essentials 1', 'Computer Hardware Basics', 'IT Essentials', 'Associate Python Developer', 'Introduction to Cybersecurity', 'iChoose Leadership Values Program', 'iDo Leadership Values Program', 'iLead Program']) {
    assert.equal(await page.locator('.certification-card').getByRole('heading',{name,exact:true}).count(),1);
  }
  const newCertificates = [
    ['Python Essentials 1','2026-06-28','TRUSTERLABS Ltd.','python-essentials-1.pdf'],
    ['Computer Hardware Basics','2026-05-26','TRUSTERLABS Ltd.','computer-hardware-basics.pdf'],
    ['IT Essentials','2026-04-26','University of Rwanda','it-essentials.pdf'],
  ];
  for(const [name,date,provider,file] of newCertificates){
    const card=page.locator('.technical-certificate').filter({has:page.getByRole('heading',{name,exact:true})});
    assert.equal(await card.locator('time').getAttribute('datetime'),date);
    assert.ok((await card.innerText()).includes('Offered by '+provider));
    assert.ok((await card.locator('.small-label').innerText()).includes('Cisco Networking Academy'));
    assert.equal(await card.getByRole('link').count(),0,'Private certificates have no public PDF link');
    assert.equal(fs.existsSync(path.join(process.cwd(),'public','certificates',file)),false,'Certificate PDF is excluded from public assets');
    const response=await page.request.get(base+'/certificates/'+file);
    assert.equal(response.status(),404,'Private certificate PDF is not publicly served');
  }
  console.log('PASS: three new certificate titles, exact dates/providers, no public PDF links and HTTP 404 for all three private certificate PDFs.');
  const csharp = page.locator('.certification-card').filter({has:page.getByRole('heading',{name:'Foundational C# with Microsoft',exact:true})});
  assert.equal(await csharp.locator('time').getAttribute('datetime'),'2026-10-12');
  assert.equal(await csharp.locator('.small-label').innerText(),'freeCodeCamp in collaboration with Microsoft');
  const verificationUrl='https://www.freecodecamp.org/certification/fcc-df763bc2-810a-4103-9cbe-d82075135302/foundational-c-sharp-with-microsoft';
  assert.equal(await csharp.getByRole('link').getAttribute('href'),verificationUrl);
  assert.equal(await csharp.getByRole('link').getAttribute('rel'),'noopener noreferrer');
  const cvPath='/cv/Umutoniwase_Sylvie_CV.pdf';
  const cvLinks=page.getByRole('link',{name:'Download CV',exact:true,includeHidden:true});
  assert.equal(await cvLinks.count(),2);
  for (const link of await cvLinks.all()) {
    assert.equal(await link.getAttribute('href'),cvPath);
    assert.equal(await link.getAttribute('download'),'Umutoniwase_Sylvie_CV.pdf');
  }
  const localPdf=fs.readFileSync(path.join(process.cwd(),'public',cvPath));
  const hash = bytes => createHash('sha256').update(bytes).digest('hex');
  const pdfResponse=await page.request.get(base+cvPath);
  assert.equal(pdfResponse.status(),200);
  assert.match(pdfResponse.headers()['content-type'],/application\/pdf/);
  assert.equal(hash(await pdfResponse.body()),hash(localPdf));
  async function checkDownload(link) {
    const [download] = await Promise.all([page.waitForEvent('download'),link.click()]);
    assert.equal(download.suggestedFilename(),'Umutoniwase_Sylvie_CV.pdf');
    assert.equal(await download.failure(),null);
    assert.equal(hash(fs.readFileSync(await download.path())),hash(localPdf));
  }
  await checkDownload(page.locator('.nav-cv a'));
  console.log('PASS: ten certificate entries (seven technical / three leadership), new C# details, all CV URLs, PDF HTTP content/hash and navbar download.');
  assert.equal(await page.locator('.hero img, .profile-photo').count(), 2);
  assert.equal(await page.locator('.project-image img').count(), 0);
  assert.equal(await page.locator('.logo-mark, .wordmark').count(),0);
  assert.equal(await page.locator('.project-card').first().locator('.project-meta').count(),1);
  assert.equal(await page.locator('.project-image-label').count(), 0);
  const portrait=page.locator('.hero-profile-photo');
  assert.equal(await portrait.getAttribute('alt'),'Umutoniwase Sylvie');
  for(const img of await page.locator('.hero img, .profile-photo, .project-image img').all()) {
    await img.scrollIntoViewIfNeeded();
    await img.evaluate(async el=>{await el.decode(); if(!el.naturalWidth) throw new Error('Image failed to load');});
  }
  assert.equal(await portrait.evaluate(el=>getComputedStyle(el).objectFit),'contain');
  assert.equal(await page.locator('.hero-portrait-frame, .portrait-caption').count(),0);
  assert.equal(await page.locator('.hero-grid').evaluate(el=>getComputedStyle(el).borderTopWidth),'0px');
  assert.equal(await page.locator('.hero-portrait-image').evaluate(el=>getComputedStyle(el).backgroundColor),'rgba(0, 0, 0, 0)');
  assert.equal(await portrait.evaluate(el=>getComputedStyle(el).filter),'none');
  assert.equal(await page.locator('.portrait-placeholder').count(), 0);
  assert.equal(await page.locator('.live-link').count(), 0);
  const repos = ['E-learning-mkscholars','mk-innovation','MKInnovationLtd','E-Learning','Sylvie-website'];
  for (const repo of repos) assert.equal(await page.locator(`.project-links a[href="https://github.com/U-Sylvie93/${repo}"]`).count(),1);
  assert.equal(await page.locator('.hero-buttons .primary').getAttribute('href'), '#projects');
  assert.equal(await page.locator('.hero-buttons .secondary').getAttribute('href'), '#contact');
  for (const [filter,count] of [['Full Stack',2],['Frontend',3],['Backend',0],['All',5]]) {
    await page.getByRole('button',{name:filter,exact:true}).click();
    assert.equal(await page.locator('.project-card').count(),count);
  }
  const out=path.join(process.cwd(),'preview');
  fs.mkdirSync(out,{recursive:true});
  for (const theme of ['dark','light']) {
    if (theme==='light') await page.getByRole('button',{name:'Switch to light theme'}).click();
    await page.reload({waitUntil:'load', timeout:120000});
    assert.equal(await page.locator('html').getAttribute('data-theme'),theme);
    for (const width of [320,375,390,430,768,1024,1440]) {
      await page.setViewportSize({width,height:1000});
      await page.evaluate(()=>window.scrollTo(0,0));
      await page.locator('.hero-profile-photo').evaluate(async el=>{
        await el.decode();
        await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
      });
      const measurements=await page.evaluate(()=>{
        const hero=document.querySelector('.hero-grid').getBoundingClientRect();
        const copy=document.querySelector('.hero-copy').getBoundingClientRect();
        const portrait=document.querySelector('.hero-portrait-image').getBoundingClientRect();
        const image=document.querySelector('.hero-profile-photo').getBoundingClientRect();
        return {imageWidth:image.width,imageHeight:image.height,overflow:document.documentElement.scrollWidth>innerWidth,hero:[hero.left,hero.right],copy:copy.bottom,portrait:portrait.top,cols:getComputedStyle(document.querySelector('.hero-grid')).gridTemplateColumns,buttons:[...document.querySelectorAll('.hero-buttons a')].map(a=>a.getBoundingClientRect().height)};
      });
      assert.equal(measurements.overflow,false,`${theme} ${width}: horizontal overflow`);
      assert.ok(measurements.imageWidth>0 && measurements.imageHeight>0, 'Portrait remains visible at every width');
      assert.ok(measurements.hero[0]>=0 && measurements.hero[1]<=width);
      assert.ok(measurements.buttons.every(height=>height>=44));
      if(width<=760) assert.ok(measurements.portrait>measurements.copy,'Mobile portrait follows text');
      if([390,768,1440].includes(width)) await page.screenshot({path:path.join(out,`emerald-${theme}-${width}.png`)});
    }
    await page.locator('#projects').scrollIntoViewIfNeeded();
    await page.locator('#projects').screenshot({path:path.join(out,`emerald-projects-${theme}.png`)});
    await page.locator('#skills').screenshot({path:path.join(out,`cleanup-skills-${theme}.png`)});
  }
  await page.setViewportSize({width:390,height:844});
  await page.evaluate(()=>window.scrollTo(0,0));
  const nav=page.locator('.mobile-toggle');
  await nav.click();
  assert.equal(await nav.getAttribute('aria-expanded'),'true');
  await page.keyboard.press('Escape');
  assert.equal(await nav.getAttribute('aria-expanded'),'false');
  assert.ok(await nav.evaluate(el=>el===document.activeElement));
  await checkDownload(page.locator('.hero-social').getByRole('link',{name:'Download CV'}));
  await page.keyboard.press('Tab');
  await page.locator('.hero-buttons .primary').focus();
  assert.equal(await page.locator('.hero-buttons .primary').evaluate(el=>getComputedStyle(el).outlineStyle),'solid');
  assert.equal(await page.locator('.project-card').first().evaluate(el=>getComputedStyle(el).transitionDuration),'0s');
  await page.getByRole('button',{name:/Send Message/i}).click();
  assert.equal(await page.locator('[name="name"]').getAttribute('aria-invalid'),'true');
  assert.deepEqual(errors,[]);
  console.log('PASS: five repositories, ownership, filters, ten credentials, portrait, compact project cards and plain-name header, CTA links, 14 responsive/theme combinations, theme persistence, mobile navigation/Escape/focus, CV downloads, focus outline, reduced motion and form validation.');
  await page.setViewportSize({width:1440,height:1000});
  await page.locator('#certifications').scrollIntoViewIfNeeded();
  await page.screenshot({path:path.join(out,'phase5-certifications-light-desktop.png')});
  await page.getByRole('button',{name:'Switch to dark theme'}).click();
  await page.screenshot({path:path.join(out,'phase5-certifications-dark-desktop.png')});
  await page.setViewportSize({width:390,height:844});
  await csharp.scrollIntoViewIfNeeded();
  await page.screenshot({path:path.join(out,'phase5-certification-dark-mobile.png')});
  try {
    const verification = await page.request.get(verificationUrl,{timeout:20000});
    console.log('Credential external URL HTTP status:',verification.status());
  } catch(error) { console.log('Credential external URL check unavailable:',error.message.split('\n')[0]); }
  await browser.close();
})().catch(async error=>{console.error(error);await activeBrowser?.close();process.exitCode=1;});






