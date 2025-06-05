function admin(a,p,t,st,se,ju)
{
    console.log("Hello "+a);
    p("Nagnath Sir",t,st,se,ju);
}

function principle(p,t,st,se,ju)
{
    console.log("Hello "+p);
    t("Aanand Sir",st,se,ju);
}

function teacher(t,st,se,ju)
{
    console.log("Hello "+t);
    st("Harsh",se,ju);
}

function student(st,se,ju)
{
    console.log("Hello "+st);
    se("Reyan",ju);
}

function senior(se,ju)
{
    console.log("Hello "+se);
    ju("Mayur");
}

function junior(ju)
{
    console.log("Hello "+ju)
}

admin("Kunal Sir",principle,teacher,student,senior,junior);