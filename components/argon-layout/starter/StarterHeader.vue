<template>
    <header class="header-global">
        <base-nav class="navbar-main btn btn-default" transparent type="default" effect="light" expand>
            <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="/toryumon/logo3.png">
            </nuxt-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <nuxt-link to="/argon-demo/">
                        <img src="/toryumon/logo4.png">
                    </nuxt-link>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item dropdown">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFshr4USznOSpgRAzLV238cbyA-jk4f7JAPWQ0x6rAl5nQGw/viewform?usp=sf_link" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-check-bold d-lg-none"></i>
                        <span class="nav-link-inner--text">FORM</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-xl">
                        <div class="dropdown-menu-inner">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFshr4USznOSpgRAzLV238cbyA-jk4f7JAPWQ0x6rAl5nQGw/viewform?usp=sf_link"
                               class="media d-flex align-items-center">
                                <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                    <i class="ni ni-send"></i>
                                </div>
                                <div class="media-body ml-3">
                                    <h6 class="heading text-primary mb-md-1">参加申し込み</h6>
                                    <p class="description d-none d-md-inline-block mb-0">現在活躍中のイケてる起業家、VCの方などにお越しいただき、パネルディスカッションやピッチコンテストを行います！</p>
                                </div>
                            </a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdj_TOtLGjYYU6veVL6Ebu6f0jHKp1m3PBwkh420tzrneIhcA/viewform?usp=sf_link"
                               class="media d-flex align-items-center">
                                <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                    <i class="ni ni-trophy"></i>
                                </div>
                                <div class="media-body ml-3">
                                    <h5 class="heading text-warning mb-md-1">ピッチ申し込み</h5>
                                    <p class="description d-none d-md-inline-block mb-0">シードステージの学生スタートアップ(U25)が調達や仲間集めをかけて、ピッチコンテストを行います！</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
                <!-- <li class="nav-item dropdown">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Examples</span>
                    </a>
                    <div class="dropdown-menu">
                        <nuxt-link to="/argon-demo/landing" class="dropdown-item">Landing</nuxt-link>
                        <nuxt-link to="/argon-demo/profile" class="dropdown-item">Profile</nuxt-link>
                        <nuxt-link to="/argon-demo/login" class="dropdown-item">Login</nuxt-link>
                        <nuxt-link to="/argon-demo/register" class="dropdown-item">Register</nuxt-link>
                    </div>
                </li> -->
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/events/2354322441301489/" target="_blank"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://instagram.com/toryumontokyo?igshid=1u1p5ed9n26to"
                       target="_blank" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/TORYUMON_FV" target="_blank"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
            </ul>
        </base-nav>
        <br>
        <br>
    </header>
</template>
<script>
import BaseNav from "~/components/argon/BaseNav";
import CloseButton from "~/components/argon/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton
  }
};
</script>
<style>
</style>
