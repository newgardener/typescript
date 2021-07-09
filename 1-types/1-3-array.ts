{
    // Array
    const fruits: string[] = ['🍑', '🍒'];
    const scores: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {}

    // Tuple (추천하지 않음) => interface, type alias, class로 대체하는 것이 좋음 ✨
    let student: [string, number];
    student = ['name', 100];
    student[0]; // name
    student[1]; // 100

    // Object Destructuring
    const [name, age] = student;
}