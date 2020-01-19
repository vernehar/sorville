// Print instructions depending on whether the whole table is vegan or not
EaterOneVegan = true;
EaterTwoVegan = false;

if (EaterOneVegan && EaterTwoVegan){
    console.log('Only vegan menus')
}else if(EaterOneVegan || EaterTwoVegan){
    console.log('Vegan and normal menus')
}else{
    console.log('Only normal menus thank fuck')
}