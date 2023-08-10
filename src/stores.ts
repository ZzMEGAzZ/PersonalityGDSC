// import { writable } from 'svelte/store';
import type { Question } from './types';

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
    }
];


export { questionsEn, questionsTH };