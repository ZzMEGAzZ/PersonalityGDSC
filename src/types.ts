interface Question {
	question: string;
	answers: string[];
}

interface SendResult {
	name: string;
	ans_1: string;
	ans_2: string;
	ans_3: string;
	ans_4: string;
	ans_5: string;
	ans_6: string;
	ans_7: string;
	ans_8: string;
	ans_9: string;
	ans_10: string;
}

interface Response {
	message: string;
	result: string;
}

interface Role {
	role: string;
    detail: RoleDetail
}

interface RoleDetail {
    detailEN: string;
    detailTH: string;
    img: string;
}

export type { Question, SendResult, Response, Role };
