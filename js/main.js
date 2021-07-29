// know more button (introduction section)

$('.know_more > button').click(()=>
{
    

    $('.more').show();
    $('.know_more > button').hide();
    $('.know_less').show();
})

// know less button (introduction section)

$('.know_less').click(()=>
{
  $('.more').hide();
    $('.know_more > button').show();
    $('.know_less').hide();
})

// know more button (facebook section)
$('.expand2').click(()=>
{
    $('.card_content >p a').attr("href","index2.html");
})

$('.expand').click(()=>
{
    $(".list").show();
    $(".expand").hide();
    $(".unexpand").show();
})

// know less button (introduction section)

$(".unexpand").click(()=>
{
    
    $(".list").hide();
    $(".expand").show();
    $(".unexpand").hide();
})
