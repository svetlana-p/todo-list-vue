<template>
  <div class="info">
    <h1>{{info.title}}</h1>
    <div v-if="info.image">
      <Banner :image="info.image" />
    </div>
    <div class="info-text" v-html="info.text">
      {{info.text}}
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  name: 'Information',
  components: {Banner},
  data() {
    return {
      info: {
        title: 'Возможности',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non facilisis odio. Aliquam auctor tristique lectus, sed mattis sem rutrum quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla ac vulputate diam, eu vulputate lacus. Ut ex enim, rhoncus et libero sed, eleifend aliquam turpis. Aenean lobortis dolor et ligula maximus, ut dictum urna imperdiet. Suspendisse velit ligula, blandit viverra sagittis facilisis, placerat ut nulla. In eu arcu vitae sapien tincidunt ultrices nec non mi. Proin aliquet diam a sem aliquet tempor. Duis malesuada ipsum sit amet dolor accumsan tincidunt. Aliquam molestie varius orci non dapibus. Nullam hendrerit mi at dignissim ullamcorper. Donec iaculis lectus vitae eros facilisis, sit amet pulvinar metus volutpat.</p>'
            + '<p>Vestibulum id mi id dui scelerisque rutrum vel non sem. Etiam pellentesque interdum purus. Morbi rutrum rutrum pellentesque. Ut eget leo felis. Aenean pellentesque nunc sem, vel scelerisque est pulvinar et. Aenean accumsan placerat placerat. Duis non erat mauris. Quisque dictum neque nec tellus iaculis mollis. Donec non sapien nisi. Mauris lacinia ac velit id dignissim. Vestibulum vehicula mauris ac urna malesuada porta. Proin venenatis velit a consequat scelerisque. Cras sed diam consequat, finibus nisi sed, tempus erat. Maecenas bibendum, ligula mattis commodo malesuada, leo enim vestibulum ipsum, vel tincidunt tortor lorem non sapien.</p>'
            + '<p>Nullam eu iaculis justo. Aliquam condimentum tellus sed malesuada tempor. Nulla facilisi. Aenean fermentum dolor eu tincidunt vulputate. Nunc eleifend elit sem, eu ullamcorper arcu placerat sit amet. Suspendisse semper bibendum arcu, at placerat quam euismod in. Nam vitae tristique arcu. Donec quis magna nec elit dictum ultricies a ac massa. Maecenas malesuada auctor vulputate. Etiam sed est pretium, lobortis quam in, facilisis orci. Mauris quis ipsum id lectus lobortis aliquam ut eu felis. Mauris vulputate nisi in ornare feugiat. Ut dictum velit quam, eget ullamcorper nibh iaculis id. </p>'
            + '<p>Maecenas tincidunt rhoncus venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ut arcu dolor. Sed sed mi sed augue dapibus fermentum non a tortor. Proin nec consectetur purus. Mauris suscipit, quam sit amet tincidunt vehicula, diam neque volutpat ipsum, eu auctor mi magna et tellus. Suspendisse egestas ante id augue dapibus, vel imperdiet libero congue. Aenean eget viverra magna. Nunc faucibus ultrices est eu luctus. Etiam vel gravida sem, vel vestibulum nulla. Nunc blandit ante sit amet libero blandit lacinia. Etiam ac massa eget sapien feugiat ultrices. Etiam tempor ante fermentum risus fermentum, in condimentum libero facilisis. In sodales arcu nisi, vel gravida dolor fringilla in. </p>'
            + '<p>Nunc id lacus nec quam hendrerit congue. Aenean aliquet lectus at magna convallis gravida. Nullam non elementum erat. Etiam ac tortor consectetur, sollicitudin dui in, iaculis metus. In in lacus accumsan, mattis massa ut, commodo ligula. Praesent sollicitudin nunc vitae cursus vehicula. Curabitur id elit sed nunc eleifend varius. Vestibulum iaculis risus congue fermentum imperdiet. In ornare dolor quam, nec auctor augue bibendum id. In hac habitasse platea dictumst. Proin sodales ut justo id aliquet. Etiam molestie augue vitae odio ultricies, nec tincidunt nulla vulputate. Fusce vitae massa porta sem laoreet ornare sed sit amet urna. Aenean vitae faucibus justo. Sed id nisi rutrum, tempor turpis id, porttitor mi. Nulla sapien odio, sollicitudin non mollis ac, malesuada id libero. </p>'
      }
    }
  }
}
</script>