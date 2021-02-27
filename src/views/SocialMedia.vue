<template>
  <container>
    <!-- <Tweet id="692527862369357824"></Tweet>
    <Timeline
      id="twitterdev"
      sourceType="profile"
      :options="{ tweetLimit: '3' }"
    />
    <Timeline id="twitterdev" sourceType="likes" :options="{ theme: 'dark' }" />
    <Timeline id="twitterdev" sourceType="list" /> -->

    <!-- Facebook -->
    <div
      class="fb-page"
      data-href='https://www.facebook.com/New-Orleans-Archery-Club-100104458645257/"'
      data-tabs="timeline"
      data-width="500"
      data-height="630"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite='https://www.facebook.com/New-Orleans-Archery-Club-100104458645257/"'
        class="fb-xfbml-parse-ignore"
      >
        <a
          href='https://www.facebook.com/New-Orleans-Archery-Club-100104458645257/"'
          >New Orleans Archery Club</a
        >
      </blockquote>
    </div>

    <!-- <div class="facebook">
      <div id="fb-root"></div>
      <script
        async
        type="application/javascript"
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0&appId=112933163377610&autoLogAppEvents=1"
        nonce="VvOXdiat"
      ></script>
      <div
        class="fb-page"
        data-href="https://www.facebook.com/New-Orleans-Archery-Club-100104458645257/"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/New-Orleans-Archery-Club-100104458645257/"
          class="fb-xfbml-parse-ignore"
        >
          <a
            href="https://www.facebook.com/New-Orleans-Archery-Club-100104458645257/"
            >New Orleans Archery Club</a
          >
        </blockquote>
      </div>
    </div> -->

    <!-- Twitter -->

    <div class="twitter">
      <a
        class="twitter-timeline"
        data-width="500"
        data-height="630"
        href="https://twitter.com/ArcheryNew?ref_src=twsrc%5Etfw"
        >Tweets by ArcheryNew</a
      >
      <script
        type="application/javascript"
        defer
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>

      <!-- <a
        class="twitter-timeline"
        href="https://twitter.com/ArcheryNew?ref_src=twsrc%5Etfw"
        >Tweets by ArcheryNew</a
      >
      <script
        type="application/javascript"
        defer
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script> -->
    </div>

    <!-- <div>
      <a
        class="twitter-timeline"
        href="https://twitter.com/Twitter?ref_src=twsrc%5Etfw"
        >Tweets by Twitter</a
      >
      <script
        type="application/javascript"
        defer
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div> -->
  </container>
</template>

<script>
// import { Tweet, Moment, Timeline } from "vue-tweet-embed";
// import Tweet from "vue-tweet-embed";
</script>

<style>
.twitter {
  display: inline-block;
  font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  border-color: #eee #ddd #bbb;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  margin: 10px 5px;
  padding: 0 16px 16px 16px;
  max-width: 468px;
}

.facebook {
  display: inline-block;
  font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  border-color: #eee #ddd #bbb;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  margin: 10px 5px;
  padding: 0 16px 16px 16px;
  max-width: 468px;
}

/* .facebook,
.facebook:before,
.facebook:after {
  border: 1px solid #ccc;
}

.facebook:before,
.facebook:after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 2px;
  right: 2px;
  height: 1px;
  border-top: none;
}

.facebook:after {
  left: 4px;
  right: 4px;
  bottom: -5px;
  box-shadow: 0 0 2px #ccc;
} */
</style>
