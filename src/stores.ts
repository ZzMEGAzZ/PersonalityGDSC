import { writable } from 'svelte/store';
import type { Question, SendResult, Response, Role } from './types';

// export const mode = writable('main' || 'consent' || 'intro' || 'question' || 'result');
export const mode = writable('result');
export const step = writable(0);
export const name = writable('');
export const answers = writable([]);

export const response: Response = {
	message: '',
	result: ''
};

export const result: SendResult = {
	name: '',
	ans_1: '',
	ans_2: '',
	ans_3: '',
	ans_4: '',
	ans_5: '',
	ans_6: '',
	ans_7: '',
	ans_8: '',
	ans_9: '',
	ans_10: ''
};

export const lang = writable('th' || 'en');

const questionsEn: Question[] = [
	{
		question: "What's activity you enjoy the most ?",
		answers: ['Organizing events or parties', 'Creative design or artwork', 'Analyzing data or solving puzzles']
	},
	{
		question: 'When you face with a challenge, what is your typical approach ?',
		answers: ['Elaborately plan the procedure and follow up', 'Explore new ideas and possibilities', 'Research and gather information before deciding']
	},
	{
		question: "Which's character of product or service that excite you the most?",
		answers: ['Effictively response issues', 'An appealing visual', 'Innovative, interesting product']
	},
	{
		question: 'How do you feel when you have to work as a team?',
		answers: ['Loving to coordinate with others or planning strategy', 'Enjoy doing the art work or sharing a creative idea', 'Prefer to do the work individuallys']
	},
	{
		question: "Which's response you expect the most from teammates?",
		answers: ['Onging process', 'User or testing feedback', 'Unpredictable infomation']
	},
	{
		question: 'What would you prefer to do in your free time ?',
		answers: ['Loving to plan calendar for next day', 'Passionate with an art work', 'Exploring the innovation']
	},
	{
		question: "What's kind of work environment that you're looking for?",
		answers: ['Clear guidelines, supported system', 'Flexible, encouraging to do new creation ', 'Working based on logical support']
	},
	{
		question: "Which's task you want to be assigned when working with team?",
		answers: ['Managing and coordinating with others', 'Designing the appearence', 'Searching the data for making deicision']
	},
	{
		question: 'How do you feel when you have to publicly present the project ?',
		answers: ['Relexed and enjoy doing it', 'Excited crowded people', 'Calm because of well preparing']
	},
	{
		question: "What's result makes you feel successful in project ?",
		answers: ['Completed project on time and within budget', 'Delicate and well-prepared project', 'Found new aspect through project']
	}
];

const questionsTH: Question[] = [
	{
		question: 'แบบไหนคือคุณมากที่สุด ?',
		answers: ['ชอบวางแผน วางแผนชีวิตเกือบทุกอย่าง', 'ชอบงานอาร์ทๆ เป็นคนติสต์ๆ', 'ชอบคิดวิเคราะห์ ชอบแก้ปัญหา']
	},
	{
		question: 'เมื่อเจอปัญหา คุณจะแก้ไขอย่างไร ?',
		answers: ['วางแผนและทำตามแผน', 'คิดค้นไอเดียใหม่ๆ', 'ค้นคว้าข้อมูลก่อนตัดสินใจ']
	},
	{
		question: 'คุณคิดว่าสิ่งที่ทำให้คุณตื่นเต้นมากที่สุดคืออะไร ?',
		answers: ['สิ่งที่ตอบโจทย์ความต้องการของผู้ใช้', 'สิ่งที่มีความสวยงาม และมีประสิทธิภาพ', 'สิ่งที่สามารถให้ข้อมูลและความรู้ได้']
	},
	{
		question: 'คุณคิดยังไงกับการทำงานเป็นทีม ?',
		answers: ['ชอบเป็นผู้นำและประสานงานกับทีม', 'ชอบทำงานร่วมกับทีม', 'ชอบทำงานเป็นคนเดียว']
	},
	{
		question: 'คุุณอยากเห็นข้อมูลแบบไหนมากที่สุด ?',
		answers: ['ความคืบหน้าของงาน', 'ฟีดแบคจากคนอื่นๆ', 'ข้อมูลที่เราคาดไม่ถึง']
	},
	{
		question: 'คุณชอบทำอะไรในเวลาว่าง ?',
		answers: ['วางแผนสิ่งที่ต้องทำ วางแผนเสร็จ หมดวันพอดี', 'เสพงานศิลป์ วาดรูปสักนิด ดีไซน์สักหน่อย', 'ลองใช้เทคโนโลยีใหม่ๆ']
	},
	{
		question: 'คุณชอบสภาพแวดล้อมการทำงานแบบไหน ?',
		answers: ['มีโครงสร้างและแนวทางที่ชัดเจน', 'ยืดหยุ่น ส่งเสริมให้ลองอะไรใหม่ๆ', 'จะทำอะไรต้องมีข้อมูลมาซัพพอร์ต']
	},
	{
		question: 'หากต้องทำงานเป็นทีม คุณเป็นคนแบบไหน ?',
		answers: ['คอยจัดการและประสานงานกับทุกคนในทีม', 'ดีไซน์โภชนา จะให้ออกแบบอะไรส่งมาเลย', 'หาข้อมูลมาช่วยทีมตัดสินใจ']
	},
	{
		question: 'คุณรูุ้สึกอย่างไรเวลาพรีเซนต์งาน ?',
		answers: ['สบายมาก ชอบพรีเซนต์งานอยู่แล้ว', 'ตื่นเต้น จะได้โชว์ผลงานแล้ว', 'พร้อมมาก เตรียมข้อมูลมาแน่นเอี๊ยด']
	},
	{
		question: 'อะไรที่ทำให้คุณแฮปปี้ที่สุดเวลาทำงาน ?',
		answers: ['เสร็จทันเวลาและค่าใช้จ่ายอยู่ในงบ', 'ได้เห็นผลงานตัวเองเป็นชิ้นเป็นอัน', 'ได้ความรู้ใหม่ๆให้เราไปต่อยอดได้']
	}
];


const roles: Role[] = [	
	{
		role: 'Project Manager',
		detail: {
			detailEN: 'Project Manager is responsible for planning, overseeing and leading projects from ideation through to completion. This is a senior role at an organization and requires interaction with a range of internal and external stakeholders, most often managing several moving project parts simultaneously.',
			detailTH: 'ผู้จัดการโครงการรับผิดชอบในการวางแผน ดูแล และนำโครงการตั้งแต่การคิดค้นไอเดีย จนถึงการสร้างสรรค์ผลงาน นี่เป็นตำแหน่งที่สูงในองค์กร และต้องมีการปฏิสัมพันธ์กับผู้เกี่ยวข้องภายในและภายนอก โดยมักจะจัดการหลายๆโครงการพร้อมกัน',
			img: 'https://www.ajarn.com/media/k2/items/cache/0c0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b_XL.jpg'
		}
	},
	{
		role: 'UX/UI Designer',
		detail: {
			detailEN: 'UX/UI Designer is responsible for creating the design and layout of a website or web pages. It and can mean working on a brand new website or updating an already existing site. Their role is different to web developers, who specialise in making web designs a reality or writing code that dictates how different parts of the website fit together.',
			detailTH: 'นักออกแบบ UX/UI รับผิดชอบในการสร้างการออกแบบและเค้าโครงของเว็บไซต์หรือหน้าเว็บ และสามารถหมายถึงการทำงานกับเว็บไซต์ใหม่หรือการอัพเดทเว็บไซต์ที่มีอยู่แล้ว บทบาทของพวกเขาแตกต่างจากนักพัฒนาเว็บ ซึ่งเชี่ยวชาญในการทำให้การออกแบบเว็บเป็นจริงหรือเขียนโค้ดที่กำหนดวิธีการทำงานของส่วนต่างๆของเว็บไซต์',
			img: 'https://www.ajarn.com/media/k2/items/cache/0c0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b_XL.jpg'
		}
	},
	{
		role: 'Data Analyst',
		detail: {
			detailEN: 'Data Analyst is responsible for collecting, processing and performing statistical analyses of data. Their skills may not be as advanced as data scientists (e.g. they may not be able to create new algorithms), but their goals are the same – to discover how data can be used to answer questions and solve problems.',
			detailTH: 'นักวิเคราะห์ข้อมูลรับผิดชอบในการเก็บรวบรวม ประมวลผล และวิเคราะห์ข้อมูลทางสถิติ ทักษะของพวกเขาอาจไม่ได้เทียบเท่ากับนักวิทยาศาสตร์ข้อมูล (เช่นพวกเขาอาจจะไม่สามารถสร้างอัลกอริทึมใหม่ได้) แต่เป้าหมายของพวกเขาเหมือนกัน - ค้นพบว่าข้อมูลสามารถใช้เพื่อตอบคำถามและแก้ปัญหาได้อย่างไร',
			img: 'https://www.ajarn.com/media/k2/items/cache/0c0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b_XL.jpg'
		}
	},	
	{	
		role: 'Full Stack Developer',
		detail: {
			detailEN: 'Full Stack Developer is responsible for developing and designing front end web architecture, ensuring the responsiveness of applications and working alongside graphic designers for web design features, among other duties. Full Stack Developers will be required to see out a project from conception to final product, requiring good organizational skills and attention to detail.',
			detailTH: 'นักพัฒนาฟูลสแต็กรับผิดชอบในการพัฒนาและออกแบบโครงสร้างเว็บด้านหน้า ให้แอปพลิเคชันตอบสนองได้ และทำงานร่วมกับนักออกแบบกราฟิกสำหรับคุณสมบัติการออกแบบเว็บไซต์ นอกจากนี้ยังมีหน้าที่อื่นๆอีกมากมาย นักพัฒนาฟูลสแต็กจะต้องดูแลโครงการตั้งแต่แรกเริ่มจนถึงผลงานสุดท้าย ซึ่งต้องใช้ทักษะการจัดการที่ดีและใส่ใจกับรายละเอียด',
			img: 'https://www.ajarn.com/media/k2/items/cache/0c0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b_XL.jpg'
		}
	},
	{
		role: 'Data Scientist',
		detail: {
			detailEN: 'Data Scientist is responsible for collecting, processing and performing statistical analyses of data. Their skills may not be as advanced as data scientists (e.g. they may not be able to create new algorithms), but their goals are the same – to discover how data can be used to answer questions and solve problems.',
			detailTH: 'นักวิทยาศาสตร์ข้อมูลรับผิดชอบในการเก็บรวบรวม ประมวลผล และวิเคราะห์ข้อมูลทางสถิติ ทักษะของพวกเขาอาจไม่ได้เทียบเท่ากับนักวิทยาศาสตร์ข้อมูล (เช่นพวกเขาอาจจะไม่สามารถสร้างอัลกอริทึมใหม่ได้) แต่เป้าหมายของพวกเขาเหมือนกัน - ค้นพบว่าข้อมูลสามารถใช้เพื่อตอบคำถามและแก้ปัญหาได้อย่างไร',
			img: 'https://www.ajarn.com/media/k2/items/cache/0c0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b_XL.jpg'
		}
	}
]



	

export { questionsEn, questionsTH, roles };
