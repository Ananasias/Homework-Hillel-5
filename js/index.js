const question = confirm("Есть ли вам 18 лет?");
if (!question) { alert("Вам запрещено проходить опрос \n🔞"); }
else {
    const time = prompt("Во сколько вы встаете?");

    if (isNaN(time)) { alert("Некорректный ввод") }
    else if ((time >= 1) && (time <= 5)) { alert("Очень рано"); }
    else if ((time >= 6) && (time <= 8)) { alert("Рановато"); }
    else if ((time >= 9) && (time <= 11)) { alert("Нормально"); }
    else if ((time >= 12) && (time <= 14)){ alert("Слишком поздно"); }
    else if ((time >= 15) && (time <= 24)) { alert("Очень-очень поздно"); }
    else if ((time <= 0) || (time >= 25)) { alert("Научись пользоваться часами! \n ( ͡❛ ͜ʖ ͡❛)"); }
}

/*  КАК КОРРЕКТНО ЗАПИСАТЬ ЭТУ СТОКУ КОРОТКО?
else if ((time >= 9) && (time <= 11)) { alert("Нормально");
ТАКАЯ ЗАПИСЬ ПРАВИЛЬНАЯ ?: 
else if ( 9 >= time <= 11 ){ alert("Нормально");}
