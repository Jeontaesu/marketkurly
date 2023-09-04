$(function(){



// $(window).scroll(function(){
//   curr = $(this).scrollTop(); // 현재 스크롤 바의 위치를 curr에 담음

//   if (curr > 0) {
    
//   } else {
    
//   }
// })



  const mainSlider = new Swiper('.sc-visual .swiper', {
      slidesPerView: 1,
      // spaceBetween: 30,
      centeredSlides: true,
      loop:true,
      autoplay:{
        delay: 2000,
        disableOnInteraction:false,
      },
      pagination: {
        el: ".fraction",
        type: "fraction",
      },
      navigation: {
          nextEl: ".v-next",
          prevEl: ".v-prev",
      },
    });


  /*
  * @sort1 = 이 상품 어때요?
  * @sort2 = 
  * @sort3 = 놓치면 후회할 가격
  * @sort4 = 신선한 상품 X 합리적 가격
  *
  *
  * 
  * 
  * 
  * 
  * 
  * @sort12 = MD의 추천
  */

  function productList(frame,sortNum,cateNum){
    fetch('./assets/data/product.json')
    .then((response)=> response.json())
    .then((json) => {
      data=json.items; //모든데이터

      
      var result = data.filter(function (parm) {
        return parm.sort.indexOf(sortNum) >= 0
      });
    
      if(cateNum){
        var result = result.filter(function (parm) {
          return parm.cate.indexOf(cateNum) >= 0
        });
      }
      
      let html='';
      result.forEach(element => {
        reviewCnt = (element.snippet.review >=999) ? '999+' : element.snippet.review;

        saleEl = (element.snippet.price.ori === element.snippet.price.curr) ? 'hide':'';

        badgeEl = `<em class="badge">${element.snippet.badge}</em>`;

        badge = (element.snippet.badge !== null) ? badgeEl : '';


        html+=`<div class="swiper-slide">
        <div class="img-wrap">
            <a href="">
              <img src="${element.snippet.thumbnail}" alt="상품이미지">
              ${badge}
            </a>
            <button class="btn-cart">
              <span class="blind">장바구니</span>
            </button>
        </div>
        <a href="" class="txt-wrap">
          <p class="title">${element.snippet.title}</p>
          <div class="price-box">
            <div class="wrap">
                <strong class="discount ${saleEl}">${element.snippet.price.discount}%</strong>
                <strong class="curr">${price(element.snippet.price.curr)}원</strong>
            </div>
            <span class="ori ${saleEl}">${price(element.snippet.price.ori)}원</span>
          </div>
          <div class="review">
            <div class="review-icon"></div>
            <span>후기 ${reviewCnt}</span>
          </div> </a> </div>`;
      });
      $(frame).html(html);
    });
  }

  productList('#list1',1);
  // productList('#list2',2);
  productList('#list3',3);
  productList('#list4',4);
  productList('#list5',5);
  productList('#list6',6);
  productList('#list7',7);
  productList('#list8',8);

  productList('#list10',10);
  productList('#list11',11);

  productList('#list13',13);
  

  
/* 정규식 */
function price(num){
  let price = num;
  result = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
  return result; 
}
  
/* 배열 */
const arr = [1, 2];
let elementExistYn = true;
if(arr.indexOf(3) < 0)  {
  elementExistYn = false; 
}




/* recipe_json */

function recipeList(frame,sortNum,){
  fetch('./assets/data/recipe.json')
  .then((response)=> response.json())
  .then((json) => {
    data=json.items; //모든데이터

    var result = data.filter(function (parm) {
      return parm.sort.indexOf(sortNum) >= 0
    });

    let html='';
    result.forEach(element => {
     
      html+=`<div class="swiper-slide"><a href=""><div class="img-wrap">
          <img src="${element.snippet.thumbnail}" alt="레시피"></div>
      <div class="txt-wrap">
          <h3 class="title">${element.snippet.title}</h3>
      </div></a></div>`;
    });
    $(frame).html(html);
  })
}
recipeList('#list14',14);



    /* swiper 설정*/
    const productSlide = new Swiper('.group-product .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next",
          prevEl: ".prev",
      },
    
    });

    const productSlide1 = new Swiper('.group-product.product-list1 .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next-product1",
          prevEl: ".prev-product1",
      },
    });
    const productSlide3 = new Swiper('.group-product.product-list3 .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next-product3",
          prevEl: ".prev-product3",
      },
    });
    const productSlide4 = new Swiper('.group-product.product-list4 .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next-product4",
          prevEl: ".prev-product4",
      },
    });
    const productSlide5 = new Swiper('.group-product.product-list5 .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next-product5",
          prevEl: ".prev-product5",
      },
    });
    const productSlide6 = new Swiper('.group-product.product-list6 .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next-product6",
          prevEl: ".prev-product6",
      },
    });
    const productSlide7 = new Swiper('.group-product.product-list7 .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next-product7",
          prevEl: ".prev-product7",
      },
    });
    const productSlide8 = new Swiper('.group-product.product-list8 .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next-product8",
          prevEl: ".prev-product8",
      },
    });
    const productSlide10 = new Swiper('.group-product.product-list10 .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next-product10",
          prevEl: ".prev-product10",
      },
    });
    const productSlide11 = new Swiper('.group-product.product-list11 .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next-product11",
          prevEl: ".prev-product11",
      },
    });
    const productSlide12 = new Swiper('.group-product.product-list12 .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next-product12",
          prevEl: ".prev-product12",
      },
    });
    const productSlide13 = new Swiper('.group-product.product-list13 .swiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      // loop:true,

      navigation: {
          nextEl: ".next-product13",
          prevEl: ".prev-product13",
      },
    });




    const recipeSlide = new Swiper('.group-recipe .swiper', {
      slidesPerView: 3,
      spaceBetween: 27,
      // loop:true,

      navigation: {
          nextEl: ".next-recipe",
          prevEl: ".prev-recipe",
      },
    });

    const instaSlide = new Swiper('.group-insta .swiper', {
      slidesPerView: 6,
      spaceBetween: 18,
      // loop:true,

      navigation: { 
          nextEl: ".next",
          prevEl: ".prev",
      },
    });

    /* md-recomm tab */
    $('.md-recomm .tabnav a').click(function(e){
      e.preventDefault();


      cateIndex = $(this).data('cate');

      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
    
      productList('#list12',12,cateIndex);
       
    })

    $('.md-recomm .tabnav li:first-child a').trigger('click'); //강제로 첫번째 클릭


    /* gnb-cate */
    $('.gnb-cate .cate-list').hover(function(){
      $('.gnb-cate .sub-cate-wrap').addClass('on');
    },function(){
      $('.gnb-cate .sub-cate-wrap').removeClass('on');
    })


    /* @sub-cate:hover img src 변경 */
    $('.cate-item').each(function() {

      var nowImg = $(this).find('img');  //호버한 부분의 img파일 찾기
      var srcName = nowImg.attr('src');  //호버한 부분의 이미지 주소값 src가지고오기
      var newSrc = srcName.substring(0, srcName.lastIndexOf('.'));
      //.png , .jpg 와같이 파일명 자르기. 뒤에서부터 시작해서 '.'점있는 곳 까지 컷! 
    
     //호버이벤트
      $(this).hover(function() { 
        $(this).find('img').attr('src', newSrc+ '_on.' + /[^.]+$/.exec(srcName)); //hover시 _on붙이기
      }, function() {
        $(this).find('img').attr('src', newSrc + '.' + /[^.]+$/.exec(srcName)); //hover시 _on 떼기
      });
    
    });


    /* sc-special time-unit 제어 */

    const remainTime = document.querySelector(".time-unit");

    function diffDay(frame,end1) {
        // const endTime = new Date(end1);
        now = new Date();

        const endTime = new Date(`"${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()+1}"`); //항상 다음날 계산
        const todayTime = new Date();
        
        const diff = endTime - todayTime;

        const diffDay = String(Math.floor(diff / (1000*60*60*24)));
        const diffHour =String( Math.floor((diff / (1000*60*60)) % 24)).padStart(2,"0");
        const diffMin = String(Math.floor((diff / (1000*60)) % 60)).padStart(2,"0");
        const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2,"0");
        
        remainTime.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;

        timeEl = `
            <span>${diffHour}</span>
            <span>${diffMin}</span>
            <span>${diffSec}</span>`;
            

            $(frame).html(timeEl)
    }

    diffDay('.time-unit',"2023-07-23");

    // setInterval(diffDay('.time-unit',"2023-07-23"), 1000);

    setInterval(() => {
      diffDay('.time-unit',"2023-07-23");
    }, 1000);


  

});