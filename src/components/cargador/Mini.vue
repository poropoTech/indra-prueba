<template>
  <div id="loaderMini">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
</template>

<script>
export default {
  name: 'Mini'

}
</script>

<style >
#loaderMini {
    /* position:fixed; */

    right: 0;
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
}

#loaderMini span {
  display: block;
  width: 8px;
  height: 4px;
  background: #151924;
  animation: loaderMini 0.5s ease-in-out infinite;
  margin: 0 2px;
  border-radius: 0.5rem;
}

#loaderMini span:nth-child(2){
    animation-delay: .07s;
}

#loaderMini span:nth-child(3){
    animation-delay: .1s;
}

#loaderMini span:nth-child(4){
    animation-delay: .12s;
}

#loaderMini span:nth-child(5){
    animation-delay: .15s;
}

#loaderMini span:nth-child(6){
    animation-delay: 0.18;
}

#loaderMini span:nth-child(7){
    animation-delay: 0.45s;
}

#loaderMini span:nth-child(8){
    animation-delay: 0.5s;
}

#loaderMini span:nth-child(9){
    animation-delay: 1.2s;
}

#loaderMini span:nth-child(9){
    animation-delay: 0.65s;
}
#loaderMini span:nth-child(10){
    animation-delay: 0.74s;
}
#loaderMini span:nth-child(11){
    animation-delay: 0.82s;
}
#loaderMini span:nth-child(12){
    animation-delay: 0.8s;
}
#loaderMini span:nth-child(13){
    animation-delay: 1.95s;
}
#loaderMini span:nth-child(14){
    animation-delay: 2.1s;
}
#loaderMini span:nth-child(15){
    animation-delay: 2.25s;
}

@keyframes loaderMini {
    100% { height: 40px; }
}
</style>
