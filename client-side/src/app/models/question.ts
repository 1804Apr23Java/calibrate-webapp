export class Question {

    questionId: number;
    difficulty: number;
    value: string;
    libraryId: number;
    answers: Answers[];

}

export class Answers {

    answerId: number;
    isCorrect: boolean;
    value: string;
    questionId: number;
    isSelected: boolean;

    public constructor(init?:Partial<Answers>) {
        Object.assign(this, init);
    }
}
