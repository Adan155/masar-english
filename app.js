const lessons = [
 {title:"Introducing Yourself",icon:"👋",time:"3 min",desc:"Learn simple ways to tell people who you are.",phrases:[["My name is Sara.","اسمي سارة."],["I'm from Sudan.","أنا من السودان."],["I work as a teacher.","أعمل معلّمة." ]],q:"Choose the correct sentence.",answers:["I am name Sara.","My name is Sara.","I name Sara."],correct:1,explain:"We say “My name is…” to introduce our name."},
 {title:"Daily Routines",icon:"☀️",time:"4 min",desc:"Talk about things you do every day.",phrases:[["I wake up at seven.","أستيقظ الساعة السابعة."],["I go to work.","أذهب إلى العمل."],["I usually have tea in the morning.","عادةً أشرب الشاي صباحاً."]],q:"Complete: I ___ up at seven.",answers:["wake","wakes","waking"],correct:0,explain:"Use the base verb “wake” with I: I wake up."},
 {title:"Talking About Family",icon:"👨‍👩‍👧",time:"4 min",desc:"Describe your family using simple sentences.",phrases:[["I have two brothers.","لديّ أخوان."],["My family is small.","عائلتي صغيرة."],["We live together.","نحن نعيش معاً."]],q:"Choose the correct sentence.",answers:["She have one sister.","She has one sister.","She haves one sister."],correct:1,explain:"With he, she, and it in the present simple, use “has”."},
 {title:"At the Supermarket",icon:"🛒",time:"5 min",desc:"Ask for items and talk about prices.",phrases:[["How much is this?","كم سعر هذا؟"],["I'd like a bottle of water.","أريد زجاجة ماء."],["Can I pay by card?","هل يمكنني الدفع بالبطاقة؟"]],q:"You want to know the price. What do you ask?",answers:["How old is this?","How much is this?","How many are you?"],correct:1,explain:"“How much is this?” is a common way to ask about price."},
 {title:"Making Plans",icon:"📅",time:"5 min",desc:"Make a simple plan with a friend.",phrases:[["Are you free tomorrow?","هل أنت متفرغ غداً؟"],["Let's meet at six.","لنتقابل الساعة السادسة."],["That sounds great!","هذا يبدو رائعاً!"]],q:"Choose a natural reply: “Let's meet at six.”",answers:["That sounds great!","I am meet six.","Yesterday is six."],correct:0,explain:"“That sounds great!” is a natural positive response to a suggestion."}
];
const $ = id => document.getElementById(id);
const state = JSON.parse(localStorage.getItem("masar-progress") || '{"done":[],"xp":0,"lastDate":"","streak":0}');
function save(){localStorage.setItem("masar-progress",JSON.stringify(state));}
function render(){
 $("xp").textContent=state.xp; $("streak").textContent=state.streak;
 $("progress-label").textContent=`${state.done.length} of ${lessons.length} lessons complete`;
 $("progress-bar").style.width=`${state.done.length/lessons.length*100}%`;
 $("lesson-path").innerHTML="";
 lessons.forEach((l,i)=>{
  const done=state.done.includes(i), unlocked=i===0||state.done.includes(i-1);
  const b=document.createElement("button"); b.className="lesson-card"+(done?" done":"")+(unlocked?"":" locked"); b.disabled=!unlocked;
  b.innerHTML=`<div class="lesson-icon">${done?"✓":unlocked?l.icon:"🔒"}</div><div class="lesson-meta"><small>LESSON ${String(i+1).padStart(2,"0")} · ${l.time.toUpperCase()}</small><strong>${l.title}</strong><p>${done?"Completed — revise anytime":unlocked?l.desc:"Complete the previous lesson to unlock"}</p></div><span class="lesson-arrow">${done?"✓":unlocked?"→":"·"}</span>`;
  b.addEventListener("click",()=>openLesson(i)); $("lesson-path").appendChild(b);
 });
}
let selected=null, activeLesson=0;
function openLesson(i){
 activeLesson=i; selected=null; const l=lessons[i]; $("lesson-unit").textContent=`LESSON ${String(i+1).padStart(2,"0")}`;
 $("lesson-content").innerHTML=`<p class="eyebrow">LEARN · UNDERSTAND · PRACTISE</p><h2 class="lesson-heading">${l.icon} ${l.title}</h2><p class="lesson-desc">${l.desc}</p><h3>Useful phrases</h3>${l.phrases.map(p=>`<div class="phrase"><strong>${p[0]} <button class="speak" data-say="${p[0]}" aria-label="Listen" style="border:0;background:transparent;cursor:pointer">🔊</button></strong><span>${p[1]}</span></div>`).join("")}<p class="question">${l.q}</p><div class="answers">${l.answers.map((a,j)=>`<button class="answer" data-answer="${j}">${String.fromCharCode(65+j)}. ${a}</button>`).join("")}</div><div class="feedback" id="feedback"></div><button id="check-btn" class="primary-btn" disabled>Check answer</button>`;
 $("lesson-dialog").showModal();
 document.querySelectorAll(".answer").forEach(btn=>btn.addEventListener("click",()=>{selected=Number(btn.dataset.answer);document.querySelectorAll(".answer").forEach(x=>x.classList.toggle("selected",x===btn));$("check-btn").disabled=false;}));
 document.querySelectorAll(".speak").forEach(btn=>btn.addEventListener("click",()=>{if("speechSynthesis" in window){speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(btn.dataset.say));}else toast("Audio playback is not supported in this browser.");}));
 $("check-btn").addEventListener("click",checkAnswer);
}
function checkAnswer(){
 const l=lessons[activeLesson]; const buttons=[...document.querySelectorAll(".answer")];
 if($("check-btn").dataset.checked!=="yes"){
  buttons.forEach((b,i)=>{b.disabled=true;if(i===l.correct)b.classList.add("correct");if(i===selected&&i!==l.correct)b.classList.add("wrong");});
  const correct=selected===l.correct;
  $("feedback").textContent=(correct?"Correct! +10 XP. ":"Not quite. ")+l.explain;
  $("feedback").style.color=correct?"#168044":"#a74639";
  if(correct&&!state.done.includes(activeLesson)){state.done.push(activeLesson);state.xp+=10;const today=new Date().toDateString();if(state.lastDate!==today){const yesterday=new Date(Date.now()-86400000).toDateString();state.streak=state.lastDate===yesterday?state.streak+1:1;state.lastDate=today;}save();}
  $("check-btn").textContent=activeLesson===lessons.length-1?"Finish lesson":"Continue";$("check-btn").dataset.checked="yes";
 }else{
  $("lesson-dialog").close();render();toast(state.done.includes(activeLesson)?"Lesson progress saved.":"Try the lesson again to complete it.");
 }
}
function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2400);}
$("close-dialog").onclick=()=>$("lesson-dialog").close();
$("reset-btn").onclick=()=>{if(confirm("Reset all demo progress on this device?")){localStorage.removeItem("masar-progress");location.reload();}};
document.querySelectorAll(".nav-item").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".nav-item").forEach(x=>x.classList.toggle("active",x===btn));
 if(btn.dataset.nav==="learn"){render();window.scrollTo({top:0,behavior:"smooth"});}
 else if(btn.dataset.nav==="practice"){toast("Complete a lesson to earn XP and practise.");}
 else if(btn.dataset.nav==="profile"){
  const old=document.querySelector(".profile-panel");if(old)old.remove();
  const panel=document.createElement("section");panel.className="profile-panel";
  panel.innerHTML=`<p class="eyebrow">YOUR PROGRESS</p><h2>My MASAR profile</h2><div class="profile-stat"><span>Experience points</span><strong>${state.xp} XP</strong></div><div class="profile-stat"><span>Lessons completed</span><strong>${state.done.length}/${lessons.length}</strong></div><div class="profile-stat"><span>Learning streak</span><strong>${state.streak} days 🔥</strong></div><p class="lesson-desc">This demo saves progress on this device only. A shared student account system must be connected before using this as a real class platform.</p>`;
  document.querySelector("main").appendChild(panel);panel.scrollIntoView({behavior:"smooth"});
 }
}));
if("serviceWorker" in navigator && location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));}
render();
