import cardiology from '@/assets/cardiology.jpg';
import neurology from '@/assets/neurology.jpg';
import diabetes from '@/assets/diabetes.jpg';
export const courses = [
 {id:'cardiology-update',title:'Advances in Cardiovascular Care',specialty:'Cardiology',image:cardiology,duration:'2 hrs 30 mins',modules:4,faculty:'Dr. Arjun Mehta',role:'Consultant Cardiologist',tag:'POPULAR',description:'Explore an evidence-based approach to cardiovascular risk assessment, hypertension, and contemporary cardiac care.'},
 {id:'diabetes-management',title:'A Practical Approach to Type 2 Diabetes',specialty:'Diabetology',image:diabetes,duration:'1 hr 45 mins',modules:3,faculty:'Dr. Priya Sharma',role:'Consultant Endocrinologist',tag:'NEW COURSE',description:'Build confidence in patient-centered diabetes care, from diagnosis and glycemic monitoring to long-term management.'},
 {id:'neurology-essentials',title:'Clinical Neurology: From Symptoms to Solutions',specialty:'Neurology',image:neurology,duration:'3 hrs',modules:5,faculty:'Dr. Sanjay Rao',role:'Consultant Neurologist',tag:'CME COURSE',description:'Develop a structured approach to neurological assessment, imaging, and common presentations in clinical practice.'},
 {id:'cardiac-prevention',title:'Preventive Cardiology in Everyday Practice',specialty:'General Practice',image:cardiology,duration:'1 hr 30 mins',modules:3,faculty:'Dr. Arjun Mehta',role:'Consultant Cardiologist',tag:'CME COURSE',description:'Review practical strategies for cardiovascular prevention and patient counseling.'},
 {id:'metabolic-health',title:'Understanding Metabolic Health',specialty:'Diabetology',image:diabetes,duration:'2 hrs',modules:4,faculty:'Dr. Priya Sharma',role:'Consultant Endocrinologist',tag:'CME COURSE',description:'Review the foundations of metabolic health and lifestyle interventions.'},
 {id:'stroke-care',title:'Essentials of Stroke Recognition and Care',specialty:'Neurology',image:neurology,duration:'2 hrs 15 mins',modules:4,faculty:'Dr. Sanjay Rao',role:'Consultant Neurologist',tag:'NEW COURSE',description:'Learn the principles of recognizing stroke and the importance of timely referral.'},
];
export type Course = (typeof courses)[number];
export const specialties = ['All Specialties','General Practice','Cardiology','Diabetology','Neurology','Pediatrics','Dermatology','Oncology'];
export const questions = [
 {text:'Which approach is central to evidence-based clinical practice?',options:['Use only personal experience','Combine clinical evidence, expertise, and patient preferences','Use the same treatment for every patient'],answer:1},
 {text:'What is an important first step in assessing a patient?',options:['A thorough history and clinical examination','Prescribe medication immediately','Avoid discussing symptoms'],answer:0},
 {text:'Why is continuing medical education important?',options:['It replaces clinical experience','It is only useful for students','It supports up-to-date knowledge and patient care'],answer:2},
];
export function pageHead(title:string,description:string) {return {meta:[{title:`${title} | Omnicuris`},{name:'description',content:description},{property:'og:title',content:`${title} | Omnicuris`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]};}
