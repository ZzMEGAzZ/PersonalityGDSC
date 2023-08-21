import { writable } from 'svelte/store';
import type { Question, SendResult, Response, Role } from './types';
import pm from './Assets/IMG/project_manager.png';
import ux from './Assets/IMG/ux_ui.png';
import ds from './Assets/IMG/data_sciencetist.png';
import marketing from './Assets/IMG/marketing.png';
import se from './Assets/IMG/software_engineer.png';
import qa from './Assets/IMG/Quality_Assurance.png';

export const mode = writable('main' || 'consent' || 'intro' || 'question' || 'result');
// export const mode = writable('result');
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
		question: 'คุณอยากเห็นข้อมูลแบบไหนมากที่สุด ?',
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
		answers: ['คอยจัดการและประสานงานกับทุกคนในทีม', 'นักออกแบบ จะให้ออกแบบอะไรส่งมาเลย', 'หาข้อมูลมาช่วยทีมตัดสินใจ']
	},
	{
		question: 'คุณรู้สึกอย่างไรเวลาพรีเซนต์งาน ?',
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
			detailEN: 'Project Manager is responsible for leading the team, managing resources and managing the existing project budget. Plan work to achieve project goals and make the project successful.',
			detailTH: 'ผู้นำในการดูแลสมาชิกในทีม ดูแลทรัพยากรและดูแลงบประมาณโครงการที่มีอยู่ วางแผนการทำงานเพื่อให้บรรลุเป้าหมายของโครงการและทำให้โครงการประสบความสำเร็จ',
			img: pm
		}
	},
	{
		role: 'UX/UI Designer',
		detail: {
			detailEN: 'UX/UI Designer is responsible for creating a good user experience for Digital Product users through beautiful and easy-to-use design communication.',
			detailTH: 'นักออกแบบประสบการณ์ที่ดีให้กับผู้ใช้งาน Digital Product ต่าง ๆโดยสื่อสารผ่านการออกแบบที่สวยงาม และใช้งานง่าย',
			img: ux
		}
	},
	{
		role: 'Data Scientist/Analyst',
		detail: {
			detailEN: 'Data Scientist is responsible for collecting, processing and performing statistical analyses of data. Their skills may not be as advanced as data scientists (e.g. they may not be able to create new algorithms), but their goals are the same – to discover how data can be used to answer questions and solve problems.',
			detailTH: 'นักวิทยาศาสตร์ข้อมูลผู้เชี่ยวชาญที่ทำหน้าที่รวบรวมและนำข้อมูลต่าง ๆ หรือBig Data ที่มีมาวิเคราะห์โดยใช้เทคนิคขั้นสูงเพื่อหา Insight หรือข้อมูลเชิงลึกที่ซ่อนอยู่',
			img: ds
		}
	},	
	{	
		role: 'Marketing',
		detail: {
			detailEN: 'Marketing is responsible for creating and implementing marketing strategies and campaigns to promote the brand of the product or increase sales for the organization.',
			detailTH: 'นักการตลาดมีหน้าที่ในการสร้างและปฏิบัติกลยุทธ์และแคมเปญการตลาด เพื่อส่งเสริมภาพลักษณ์ของแบรนด์ผลิตภัณฑ์หรือเพิ่มยอดขายให้องค์กร',
			img: marketing
		}
	},
	{
		role: 'Software Engineer/Developer',
		detail: {
			detailEN: 'Data Scientist is responsible for collecting, processing and performing statistical analyses of data. Their skills may not be as advanced as data scientists (e.g. they may not be able to create new algorithms), but their goals are the same – to discover how data can be used to answer questions and solve problems.',
			detailTH: 'คนที่สามารถนำโปรแกรมต่าง ๆ เข้ามาประยุกต์กับการทำงานได้อย่างมีประสิทธิภาพผสานกับความสามารถในการพัฒนาระบบเพื่อช่วยเรื่อการประเมินคุณภาพและปฏิบัติการภายในองค์กร',
			img: se
		}
	},
	{
		role: 'Quality Assurance',
		detail: {
			detailEN: 'Quality Assurance is a position that is designed and defined to increase customer confidence and build credibility for the company or organization. At the same time, it improves work processes and enables the company to compete better with others.',
			detailTH: 'เป็นตำแหน่งที่ถูกออกแบบและกำหนดมาเพื่อเพิ่มความเชื่อมั่นให้กับลูกค้าและสร้างความน่าเชื่อถือให้กับบริษัทหรือองค์กร และในขณะเดียวกันก็คอยปรับปรุงกระบวนการการทำงานและให้บริษัทสามารถแข่งขันกับผู้อื่นได้ดียิ่งขึ้น',
			img: qa
		}
	}
]



	

export { questionsEn, questionsTH, roles };
