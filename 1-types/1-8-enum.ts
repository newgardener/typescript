{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
    const dayOfToday = DAYS_ENUM.MONDAY;
    
    // TypeScript (가능한 쓰지 않는 것이 좋음 )
    // 문자열로 할당 가능  
    // 시작하는 숫자를 할당 가능 (default 0부터 시작)
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    
    console.log(Days);
    // 다른 숫자로 할당해도 됨 => type이 정확하게 보장되지 않음 
    let day = Days.Saturday;
    console.log(day);
    day = 10;
    console.log(day);
    
    // enum 대신 
    type dayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    let dayOfweek: dayOfWeek = 'Monday';
    dayOfweek = 'Wednesday';

}
