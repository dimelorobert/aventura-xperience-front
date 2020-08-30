<template>
  <div class="home">
    <fullwithcontent/>
    <slogan/>
  </div>
</template>

<script>
// @ is an alias to /src
import fullwithcontent from '@/components/web/FullWidthContent'
import slogan from '@/components/web/Slogan'

export default {
  name: 'Home',
  components: {
    fullwithcontent,slogan
  }
}
</script>
