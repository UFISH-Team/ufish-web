<template>
  <div class="container">
    <div class="info-text">
      U-FISH is integrated with the <a href="https://arxiv.org/abs/2310.18351">Bioimage.IO Chatbot</a>.
      Here are some examples of how you can interact with the chatbot and U-FISH.
    </div>
    <div class="info-text" style="margin-top: 10px;">
      Click here to try: <a href="https://ufish-team.github.io/imjoy.html?plugin=https://ufish-team.github.io/plugins/chatbot-extension.imjoy.html">U-FISH 🤖chatbot</a>!
    </div>
    <div class="info-text-1">
      Example1: Let users complete cell segmentation, point identification and point counting through dialogue.
    </div>
    <video width="60%" controls>
      <source src="/videos/chatbot_ufish_spot_counting.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="info-text-1" style="margin-top: 40px;">
      Example2: Users can select an area on the Viewer, and then let Chatbot count the number of spots in the selected area.
    </div>
    <video width="60%" controls>
      <source src="/videos/chatbot_ufish_spot_counting2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="info-text" style="margin-top: 40px;">
      U-FISH Chatbot 🤖 for DNA-FISH 🐟🧬🔬
    </div>
    <div style="margin-bottom: 20px">
      This is another chatbot with different tools for DNA-FISH analysis. Click here to try: <a href="https://ufish-team.github.io/imjoy.html?plugin=https://ufish-team.github.io/plugins/chatbot-extension-diagnosis.imjoy.html">U-FISH DNA-FISH 🤖chatbot</a>!
    </div>
    <div class="info-text-1">
      Example1: Dignosis of dual fusion in DNA-FISH images(PML-RARA AML).
    </div>
    <video width="60%" controls>
      <source src="/videos/chatbot-dnafish-diagnosis-dual_fusion-1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="info-text-1" style="margin-top: 40px;">
      Example2: Dignosis of trisomy 8 in DNA-FISH images(MDS, myelodysplastic syndrome).
    </div>
    <video width="60%" controls>
      <source src="/videos/chatbot-dnafish-diagnosis-trisomy-1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script lang="ts">

export default {
  methods: {
  },
  components: {
  },
}
</script>

<style scoped>
.info-text {
  font-size: 1.5em;
  text-align: center;
  margin: 1em;
  margin-top: 0;
  width: 60%;
}
.info-text-1 {
  font-size: 1.2em;
  text-align: center;
  margin: 1em;
  margin-top: 0;
  width: 60%;
}
</style>
