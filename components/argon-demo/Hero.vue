<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1">
            <img src="/toryumon/back2.png" width="100%" height="108%" >
        </div>
        <div class="container shape-container d-flex align-items-center img-fluid">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg">
                        <img src="/toryumon/logo2.png" width="85%" height="85%">
                        <h1 class="text-white mt-5 mb-5">
                            <slot>ここがスタートアップの登竜門</slot>
                        </h1>
                        <div class="btn-wrapper">
                            <base-button tag="a"
                                         href="./form"
                                         class="mb-3 mb-sm-0 btn btn-default"
                                         >
                                応募はこちら
                            </base-button>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-around stars-and-coded">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
