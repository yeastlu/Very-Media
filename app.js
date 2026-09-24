const services = [
 ['Creator & influencer marketing','KOL 与达人营销','Creator partnerships across Japan, Korea, Southeast Asia, the UK, the US and Latin America. From talent selection to content and campaign delivery.','覆盖日韩、东南亚、英国、美国及拉美等市场，提供从达人筛选、内容协作到投放落地的全链路服务。'],
 ['Social & content campaigns','社媒与内容投放','Integrated content and distribution across Instagram, TikTok, YouTube and Meta, with narratives adapted to each market and platform.','覆盖 Instagram、TikTok、YouTube、Meta 全矩阵，以符合当地语境与平台特性的内容策略，推动品牌传播。'],
 ['Brand experiences & cultural moments','品牌体验与文化传播','Pop-ups, influencer trips and immersive brand experiences. We connect local culture, premium hospitality and creative storytelling to build lasting brand associations.','策划并落地 Pop-up、Influencer Trip 及沉浸式品牌体验，联动本地文化与高端酒店资源，通过本土化转译与传播策略，让 IP 在海外自然传播。'],
 ['Cross-border live commerce','跨境直播电商','Livestream planning and local production for TikTok Shop, Amazon Live and Shopify livestreams. We connect supply chains, talent and on-site teams.','围绕 TikTok Shop、Amazon Live、Shopify 直播，整合供应链、选品、达人及本地拍摄团队，统筹跨境直播策划与执行。'],
 ['AI-powered creative localization','AI 创意内容本地化','Human creativity, accelerated by AI. Localized copy, visuals and video developed for the culture and aesthetic of each audience.','以人机协同加速创意资产生产，生成适应当地文化与审美的视觉、视频及文案，为品牌提升本地化内容效率。']
];
const cases = [
 {id:'fresh',brand:'fresh',client:['FRESH · Kyoto discovery trip','FRESH 馥蕾诗 · 京都溯源之旅'],title:['Tea, culture and the art of skincare.','让茶文化，成为护肤品牌的体验。'],tag:['BRAND EXPERIENCE / JAPAN','品牌体验 / 日本'],sub:['Influencer experience · Travel retail','达人体验 · 旅行零售'],art:'KYOTO · A JOURNEY TO THE SOURCE',sections:[
 ['Fresh wanted to deepen understanding of the natural energy and fermentation science behind its Kombucha Facial Treatment Essence among affluent Asian audiences.','Fresh 希望强化「康普茶精华水」的自然能量与发酵科技认知，通过高质感内容触达亚洲高净值人群。'],
 ['Create an immersive creator journey connecting Kyoto’s tea culture with skincare rituals, while strengthening the brand’s premium travel retail image.','策划结合京都茶文化与护肤仪式感的沉浸式 KOL 体验，输出可传播的品牌叙事，提升旅行零售渠道高端形象。'],
 ['A sensory itinerary inspired by tea, light and skin; branded suites and dinners with premium hotels; and curated private experiences for Chinese, Japanese, Korean and international creators.','以「茶 × 光 × 肌肤」为灵感设计五感体验路径；联动高端酒店打造品牌化套房与晚宴；邀请中日韩及国际 KOL 参与非公开特色体验。'],
 ['Creator content across Chinese, Japanese and Korean platforms connected fermentation skincare with Eastern culture and supported premium brand positioning.','实现中日韩多平台 KOL 矩阵内容覆盖，建立「发酵护肤 × 东方文化」心智，强化高端品牌形象。']]},
 {id:'clarins',brand:'CLARINS',client:['Clarins · Across Asia Pacific','娇韵诗 · 亚太整合营销'],title:['One brand. Many local expressions.','统一品牌调性，多元本地表达。'],tag:['INTEGRATED MARKETING / APAC','整合营销 / 亚太'],sub:['Creator strategy · Product launches','达人策略 · 新品推广'],art:'ONE BRAND. MANY MARKETS.',sections:[
 ['Clarins needed to launch different products across Asia Pacific, where climate, skin preferences and social platforms vary substantially.','娇韵诗需在亚太多个市场同步推广不同新品，各地气候、肤质偏好和平台生态差异显著。'],
 ['Build a creator campaign that balances a consistent brand identity with local relevance, supporting product discovery and conversion in travel retail.','制定跨市场 KOL 整合投放，兼顾品牌统一调性与本地化表达，提升 Travel Retail 渠道的种草与转化。'],
 ['Market-specific content for Korea, Singapore, Thailand and Taiwan, built around travel skincare and duty-free shopping. Managed creator scripts, production and paid amplification.','针对韩国、新加坡、泰国、台湾设计内容模型；策划「旅行护肤解决方案」「免税店探店」场景；管理 KOL 脚本、拍摄及二次投放。'],
 ['Multi-market creator coverage reinforced anti-aging, lightweight texture and skincare makeup narratives, establishing a repeatable campaign model.','完成多市场 KOL 矩阵覆盖，强化「抗老」「轻盈」「养肤底妆」产品认知，建立可复制的跨市场投放模型。']]},
 {id:'korea',brand:'Seoul, live.',client:['Korean duty-free beauty livestream','韩国免税美妆直播'],title:['Connecting supply, creators and audiences.','打通供应链、达人与直播现场。'],tag:['LIVE COMMERCE / KOREA','跨境直播 / 韩国'],sub:['Local production · Supply chain','本地执行 · 供应链整合'],art:'BEAUTY WITHOUT BORDERS',sections:[
 ['A leading Chinese creator wanted to expand into Korean duty-free beauty livestreams but needed local supply chains, brand access, filming teams and talent coordination.','中国头部达人希望拓展韩国免税美妆直播，但缺乏本地供应链、品牌资源、拍摄团队及艺人协调能力。'],
 ['Build an end-to-end Korean livestream operation from the ground up, including product selection, local production and talent partnerships for a six-hour broadcast.','从 0 到 1 搭建韩国直播全链路，完成选品、本地执行、艺人合作及直播策划，保障单场 6 小时直播。'],
 ['Connected beauty factories and brands; coordinated filming crews, venues and interpreters; developed product selection and scripts; and arranged collaboration with actor Park Hae-jin and leading creators.','对接美妆工厂及品牌；统筹拍摄团队、场地与翻译；策划选品逻辑、脚本和节奏；协调韩国艺人朴海镇及头部达人完成跨境合作。'],
 ['Established a working China–Korea livestream operation, validating the combination of overseas supply chains and local execution.','成功打通中韩跨境直播链路，验证「海外供应链 + 本地执行」模式。']]},
 {id:'qwen',brand:'Qwen',client:['Qwen AI · A cultural conversation','千问 AI · 韩国内容传播'],title:['Making culture travel further.','让文化内容，跨越语言边界。'],tag:['SOCIAL CAMPAIGN / KOREA','社交传播 / 韩国'],sub:['Cultural localization · Social amplification','文化转译 · 社交扩散'],art:'CULTURE, IN CONVERSATION',sections:[
 ['Qwen AI wanted to use Henan TV’s Spring Festival cultural content to build awareness in Korea, overcoming differences in language and cultural context.','千问 AI 希望借河南卫视春晚文化内容，在韩国市场提升品牌认知，需克服文化差异与本地化表达难题。'],
 ['Adapt Chinese cultural IP for Korean audiences and build conversation on X and Naver.','将中国文化 IP 转化为韩国社交媒体内容，在 X 和 Naver 双平台打造传播热度。'],
 ['Localized content for Korean language and context, planned topic distribution and paid promotion, and coordinated Korean creators and media accounts.','进行韩语语境优化，设计话题传播路径与投流，对接韩国 KOL 及媒体账号完成发布扩散。'],
 ['The campaign produced a breakout Naver post and supported awareness of the brand through Chinese cultural content in Korea.','成功打造 Naver 平台爆文内容，实现中国文化 IP 在韩国的有效传播，提升品牌海外认知与兴趣。']]},
 {id:'funry',brand:'FUNRY',client:['FUNRY · Into Japanese football','FUNRY 蜂锐 · 日本体育赞助'],title:['A new market. A shared passion.','以共同热爱，打开全新市场。'],tag:['SPORTS MARKETING / JAPAN','体育营销 / 日本'],sub:['Sponsorship · Local execution','球队赞助 · 本地执行'],art:'ON THE GROUND. IN THE GAME.',sections:[
 ['Chinese sports brand Funry wanted to enter Japanese football but lacked experience with local professional clubs and sports marketing partnerships.','中国运动品牌 Funry 希望进入日本足球市场，但缺乏本地职业球队合作经验及体育营销体系。'],
 ['Advance a professional league club sponsorship, connecting brand exposure, product adoption and long-term collaboration.','代表品牌推进日本职业联赛球队赞助，构建品牌曝光、产品渗透及长期合作体系。'],
 ['Negotiated with clubs and event partners, coordinated equipment supply and brand visibility guidelines, and designed a sponsorship-to-content-to-community approach.','对接球队及赛事方，完成赞助谈判；统筹装备供应及品牌露出规范；策划「赞助 → 内容 → 社群」传播路径。'],
 ['Helped the brand enter Japanese football and establish an ongoing presence through a professional club sponsorship.','推动品牌进入日本足球市场，通过职业联赛球队赞助建立持续品牌露出与认知。']]}
];
const partnerships=[['Campaign projects','项目制合作','Complete campaign planning and delivery, built around a specific market opportunity.','单次营销活动全案策划，从策略到最终交付，灵活应对短期市场需求。'],['Annual partnerships','年度框架合作','Multi-market creator programs and ongoing brand content, with a dedicated strategic partner.','统筹全年多市场 KOL 投放与持续内容产出，建立深度战略伙伴关系。'],['Local execution','本地化执行代理','Local resources, cross-border livestreams, production and social media operations.','海外资源对接、跨境直播与拍摄统筹、本土社交媒体运营。'],['Strategy & specialist consulting','策略咨询与专项','Market entry, competitor analysis, Western-market launches and AI content workflows.','市场进入与竞品分析、欧美市场出海冷启动、AI 内容生产提效方案。']];
let lang='en';try{lang=localStorage.getItem('very-language')==='zh'?'zh':'en';}catch{}
let activeCase=null;
const dialog=document.querySelector('#case-dialog');
const pick=(en,zh)=>lang==='en'?en:zh;
function render(){
 document.documentElement.lang=lang==='en'?'en':'zh-CN';
 document.title=pick('Very Media — Make your brand shine, globally.','Very Media — 跨境整合破局，让品牌更闪耀');
 document.querySelector('meta[name="description"]').content=pick('Very Media connects brands and cultures through integrated marketing, creator partnerships and local execution across Asia Pacific and beyond.','Very Media 亚太整合营销与体验创意伙伴，提供达人营销、社媒内容、品牌体验、跨境直播与 AI 创意本地化服务。');
 document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[lang]);
 document.querySelector('#language').innerHTML=pick('EN <span>/ 中文</span>','<span>EN /</span> 中文');
 document.querySelector('#language').setAttribute('aria-label',pick('Switch to Chinese','切换为英文'));
 document.querySelector('#navigation').setAttribute('aria-label',pick('Main navigation','主导航'));
 document.querySelector('.dialog-close').setAttribute('aria-label',pick('Close case study','关闭案例'));
 document.querySelector('#menu').setAttribute('aria-label',pick('Toggle menu','展开或收起导航'));
 const openServices=[...document.querySelectorAll('#service-list details')].map(el=>el.open);
 document.querySelector('#service-list').innerHTML=services.map((s,i)=>`<details ${openServices[i]?'open':''}><summary><span class="num">0${i+1}</span><h3>${pick(s[0],s[1])}</h3><span class="plus" aria-hidden="true">+</span></summary><p>${pick(s[2],s[3])}</p></details>`).join('');
 document.querySelector('#work-grid').innerHTML=cases.map(c=>`<button class="case-card" data-case="${c.id}" aria-haspopup="dialog" aria-label="${pick('View case: ','查看案例：')+pick(...c.client)}"><div class="case-art art-${c.id}" aria-hidden="true"><span class="art-top">VERY MEDIA / ${c.id==='fresh'?'EXPERIENCES':'SELECTED WORK'}</span><span class="art-arrow">↗</span><span class="art-name">${c.brand}</span><span class="art-label">${c.art}</span></div><div class="case-meta"><div><h3>${pick(...c.client)}</h3><p>${pick(...c.sub)}</p></div><span>${pick(...c.tag)}</span></div></button>`).join('');
 document.querySelector('#partnership-list').innerHTML=partnerships.map((p,i)=>`<article class="partnership-row"><span>0${i+1}</span><h3>${pick(p[0],p[1])}</h3><p>${pick(p[2],p[3])}</p></article>`).join('');
 if(activeCase)renderCase(activeCase);
}
function renderCase(c){const headings=pick(['SITUATION','THE BRIEF','OUR APPROACH','THE OUTCOME'],['项目背景','项目任务','执行方案','项目成果']);document.querySelector('#case-content').innerHTML=`<span class="case-dialog-tag">${pick(...c.tag)}</span><h2 id="case-title" class="case-dialog-title">${pick(...c.title)}</h2><p>${pick(...c.client)}</p>${c.sections.map((s,i)=>`<section class="case-detail"><h3>${headings[i]}</h3><p>${pick(...s)}</p></section>`).join('')}`;dialog.setAttribute('aria-labelledby','case-title');}
render();
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#language').addEventListener('click',()=>{lang=lang==='en'?'zh':'en';try{localStorage.setItem('very-language',lang);}catch{}render();});
document.querySelector('#work-grid').addEventListener('click',e=>{const button=e.target.closest('[data-case]');if(!button)return;activeCase=cases.find(c=>c.id===button.dataset.case);renderCase(activeCase);dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';});
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{activeCase=null;document.body.style.overflow='';});
const menu=document.querySelector('#menu'),nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
if('IntersectionObserver' in window){document.documentElement.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
