<template>
  <div class="testimonials">
    <h2 class="title title--h2 mt-3">Testimonials</h2>
    <div class="swiper-container js-carousel-review swiper-container-initialized swiper-container-horizontal" style="cursor: grab;">
      <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
        <!-- Item review -->
        <div class="swiper-slide review-item box box-inner js-open-review swiper-slide-active" data-mfp-src="#review-1" data-effect="mfp-zoom-out" style="width: 422px; margin-right: 30px;">
          <figure class="box box-avatar">
            <img src="assets/images/avatar-1.png" alt="Client 1 Image">
          </figure>
          <h4 class="title title--h3">Client 1</h4>
          <p class="review-item__caption">Client Reviews about my work...</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: "MyTestimonials",
  components: {},
};
</script>