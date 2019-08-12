<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <img src="/toryumon/back2.png" style="height: 1300px;" class="img-fluid">
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">TORYUMONとは</h1>
                    <p class="lead text-white mt-4">TORYUMONとは福岡発の学生限定スタートアップイベントです。東京版として2018年2月に初開催され、初回の開催ながら200名以上の学生が集まり、その後の第二回ではTwitterのトレンド1位を獲得するなどの大きな盛り上がりを見せ、今年2月に行われた第三回では、300人を超える学生が集まる規模へと拡大しました。</p>
                    <a href="./form"
                       class="btn btn-white mt-4">　　　参加する　　　</a>
                </div>
                <div class="col-lg-6 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="/toryumon/T_tokyo_image_1.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="/toryumon/T_tokyo_image_2.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
};
</script>
<style>
</style>
