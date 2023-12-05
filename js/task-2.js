function calcAverageCalories(days) {
    let totalCalories = 0;
    if (days.length > 0) {
        for (const day of days) {
            totalCalories += day.calories;
        }
        return totalCalories / days.length;
    } else {
        return 0;
    }
}