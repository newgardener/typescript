{
    // Array
    const fruits: string[] = ['π', 'π'];
    const scores: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {}

    // Tuple (μΆμ²νμ§ μμ) => interface, type alias, classλ‘ λμ²΄νλ κ²μ΄ μ’μ β¨
    let student: [string, number];
    student = ['name', 100];
    student[0]; // name
    student[1]; // 100

    // Object Destructuring
    const [name, age] = student;
}