export default {
  install: Vue => {
    Vue.component('custom-element', { 
      //view层
      render: function (createElement) { 
        return createElement(
          'div', 
          { 
            class: { show: this.show },
            style: { border: '1px solid', padding: '10px' },
            attrs: { id: 'box' }, 
            on: { click: this.handleClick } 
          }, 
          'Hello Vue!'
        ) 
      }, 
      //model层
      data () { 
        return { 
          show: true 
        } 
      }, 
      methods: { 
        handleClick: function() { 
          console.log('Clicked!') 
        } 
      } 
    })      
  }
}

