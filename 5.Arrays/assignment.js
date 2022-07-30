// 1. kilometerToMeter

function kilometerToMeter(distance) {
    if (distance < 0) {
        return "Invalid Value";
    }
    var meter = distance * 1000;
    return meter;
}


// 2. budgetCalculator

function budgetCalculator(clock, phone, laptop) {
    if (clock < 0 || phone < 0 || laptop < 0) {
        return "Invalid Quantity";
    }
    var clockPrice = clock * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = clockPrice + phonePrice + laptopPrice;
    return total;
}


// 3. hotelCost

function hotelCost(day) {
    if (day < 0) {
        return "Invalid Day";
    }
    if (day <= 10) {
        var cost = day * 100;
        return cost;
    }
    else if (day >= 11 && day <= 20) {
        var remainingDays = day - 10;
        var cost = 10 * 100 + remainingDays * 80;
        return cost;
    }
    else if (day >= 21) {
        var remainingDays = day - 20;
        var cost = 10 * 100 + 10 * 80 + remainingDays * 50;
        return cost;
    }
}


// 4. megaFriend

function megaFriend(friendsName) {
    var maxName = friendsName[0];
    for (var i = 1; i < friendsName.length; i++) {
        if (friendsName[i].length > maxName.length) {
            maxName = friendsName[i];
        }
    }
    return maxName;
}
