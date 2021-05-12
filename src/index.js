new Vue({
  el: "#app",
  data() {
    return {
      activeIndex: "1",
      input: "",
      currentDate: new Date(),
      //商品的数据
      goodsList: [
        {
          id: 1,
          src: "./assets/img/1.jpg",
          price: "￥19.9",
          desc: "新鲜的水果蔬菜",
          asrc: "javascript:;",
        },

        {
          id: 2,
          src: "./assets/img/2.jpg",
          price: "￥19.9",
          desc: "新鲜的水果蔬菜",
          asrc: "javascript:;",
        },
        {
          id: 3,
          src: "./assets/img/3.jpg",
          price: "￥19.9",
          desc: "新鲜的水果蔬菜",
          asrc: "javascript:;",
        },
        {
          id: 4,
          src: "./assets/img/4.jpg",
          price: "￥19.9",
          desc: "新鲜的水果蔬菜",
          asrc: "javascript:;",
        },
        {
          id: 5,
          src: "./assets/img/5.jpg",
          price: "￥19.9",
          desc: "新鲜的水果蔬菜",
          asrc: "javascript:;",
        },
        {
          id: 6,
          src: "./assets/img/6.jpg",
          price: "￥19.9",
          desc: "新鲜的水果蔬菜",
          asrc: "javascript:;",
        },
        {
          id: 7,
          src: "./assets/img/7.jpg",
          price: "￥19.9",
          desc: "新鲜的水果蔬菜",
          asrc: "javascript:;",
        },
        {
          id: 8,
          src: "./assets/img/8.jpg",
          price: "￥19.9",
          desc: "新鲜的水果蔬菜",
          asrc: "javascript:;",
        },
      ],
      //banner栏的数据
      bannerList: [
        {
          id: 1,
          src: "./assets/img/banner1.jpg",
          asrc: "javascript:;",
        },
        {
          id: 2,
          src: "./assets/img/banner2.jpg",
          asrc: "javascript:;",
        },
        {
          id: 3,
          src: "./assets/img/banner3.jpg",
          asrc: "javascript:;",
        },
        {
          id: 4,
          src: "./assets/img/banner4.jpg",
          asrc: "javascript:;",
        },
      ],

      asideFixed: "",
    };
  },
  methods: {
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 49) {
        this.asideFixed = true;
      } else {
        this.asideFixed = false;
      }
    },
  },
  mounted() {
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  },
});
