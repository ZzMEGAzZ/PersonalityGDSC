// import { writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { Question } from './types';

export const mode = writable('main' || 'consent' || 'intro' || 'question' );
export const step = writable(0);
export const name = writable('');
export const answers = writable([]);
export const lang = writable('th' || 'en')

const questionsEn: Question[] = [
	{
		question: 'Which activity do you enjoy the most ?',
		answers: [
			'Organizing events or parties',
			'Creative design or artwork',
			'Analyzing data or solving puzzles'
		]
	},
	{
		question: 'When faced with a challenge, what is your typical approach ?',
		answers: [
			'Make a detailed plan and follow it',
			'Explore new ideas and possibilities',
			'Research and gather information before deciding'
		]
	},
	{
		question: 'What excites you the most about a product or service ?',
		answers: [
			'How well it meets the needs of users',
			'Its visual appeal and user experience',
			'The insights and data it can provide'
		]
	},
	{
		question: 'How do you feel about working in a team ?',
		answers: [
			'Enjoy leading and coordinating the team',
			'Love collaborating on creative projects',
			'Prefer focusing on individual tasks'
		]
	},
    {
		question: 'What type of information interests you the most ?',
		answers: [
			'Tracking progress and results',
			'User feedback and interface usability',
			'Patterns and trends in data'
		]
	},
    {
		question: 'What would you prefer to work on in your free time ?',
		answers: [
			'Organizing social gatherings or events',
			'Creating art or designing projects',
			'Analyzing information or trying out new technologies'
		]
	},
    {
		question: 'What kind of work environment do you prefer ?',
		answers: [
			'Structured and organized with clear guidelines',
			'Dynamic and creative, encouraging innovation',
			'Research-oriented, valuing data and insights'
		]
	},
    {
		question: 'What aspect of a company interests you the most ?',
		answers: [
			'Managing and coordinating different teams',
			'Designing the look and feel of products',
			'Using data to improve decision-making'
		]
	},
    {
		question: 'How do you feel about presenting your work to others ?',
		answers: [
			'Comfortable and enjoy it',
			'Excited to showcase creative projects',
			'Prefer presenting data and insights'
		]
	},
    {
		question: 'What motivates you most in a project ?',
		answers: [
			'Timely completion within budget',
			'Bringing creative ideas to life',
			'Uncovering valuable insights through data'
		]
	}    

];

const questionsTH: Question[] = [
    {
        question: 'แบบไหนคือคุณมากที่สุด ?',
        answers: [
            'ชอบวางแผน วางแผนชีวิตเกือบทุกอย่าง',
            'ชอบงานอาร์ทๆ เป็นคนติสต์ๆ',
            'ชอบคิดวิเคราะห์ ชอบแก้ปัญหา'
        ]
    },
    {
        question: 'เมื่อเจอปัญหา คุณจะแก้ไขอย่างไร ?',
        answers: [
            'วางแผนและทำตามแผน',
            'คิดค้นไอเดียใหม่ๆ',
            'ค้นคว้าข้อมูลก่อนตัดสินใจ'
        ]
    },
    {
        question: 'คุณคิดว่าสิ่งที่ทำให้คุณตื่นเต้นมากที่สุดคืออะไร ?',
        answers: [
            'สิ่งที่ตอบโจทย์ความต้องการของผู้ใช้',
            'สิ่งที่มีความสวยงาม และมีประสิทธิภาพ',
            'สิ่งที่สามารถให้ข้อมูลและความรู้ได้'
        ]
    },
    {
        question: 'คุณคิดยังไงกับการทำงานเป็นทีม ?',
        answers: [
            'ชอบเป็นผู้นำและประสานงานกับทีม',
            'ชอบทำงานร่วมกับทีม',
            'ชอบทำงานเป็นคนเดียว'
        ]
    },
    {
        question: 'คุุณอยากเห็นข้อมูลแบบไหนมากที่สุด ?',
        answers: [
            'ความคืบหน้าของงาน',
            'ฟีดแบคจากคนอื่นๆ',
            'ข้อมูลที่เราคาดไม่ถึง'
        ]
    },
    {
        question: 'คุณชอบทำอะไรในเวลาว่าง ?',
        answers: [
            'วางแผนสิ่งที่ต้องทำ วางแผนเสร็จ หมดวันพอดี',
            'เสพงานศิลป์ วาดรูปสักนิด ดีไซน์สักหน่อย',
            'ลองใช้เทคโนโลยีใหม่ๆ'
        ]
    },
    {
        question: 'คุณชอบสภาพแวดล้อมการทำงานแบบไหน ?',
        answers: [
            'มีโครงสร้างและแนวทางที่ชัดเจน',
            'ยืดหยุ่น ส่งเสริมให้ลองอะไรใหม่ๆ',
            'จะทำอะไรต้องมีข้อมูลมาซัพพอร์ต'
        ]
    },
    {
        question: 'หากต้องทำงานเป็นทีม คุณเป็นคนแบบไหน ?',
        answers: [
            'คอยจัดการและประสานงานกับทุกคนในทีม',
            'ดีไซน์โภชนา จะให้ออกแบบอะไรส่งมาเลย',
            'หาข้อมูลมาช่วยทีมตัดสินใจ'
        ]
    },
    {
        question: 'คุณรูุ้สึกอย่างไรเวลาพรีเซนต์งาน ?',
        answers: [
            'สบายมาก ชอบพรีเซนต์งานอยู่แล้ว',
            'ตื่นเต้น จะได้โชว์ผลงานแล้ว',
            'พร้อมมาก เตรียมข้อมูลมาแน่นเอี๊ยด'
        ]

    },
    {
        question: 'อะไรที่ทำให้คุณแฮปปี้ที่สุดเวลาทำงาน ?',
        answers: [
            'เสร็จทันเวลาและค่าใช้จ่ายอยู่ในงบ',
            'ได้เห็นผลงานตัวเองเป็นชิ้นเป็นอัน',
            'ได้ความรู้ใหม่ๆให้เราไปต่อยอดได้'
        ]
    }
];


export { questionsEn, questionsTH };