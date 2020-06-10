//问题，JSONP返回数据后，当前文件是否可以调用数据
const Play = {
    init(){
        this.$ul = $('.item')
        this.$$li = $$('.item li')
        this.$image = $('#left_image')
        this.title = $('.lyric h2')
        this.$play = $('.icon-play')
        this.$zanting = $('.icon-zanting')
        this.$next = $('.icon-next')
        this.bind()
    },
    bind(){
       this.$$li.forEach($node => {
           $node.onclick = () =>{
                this.$$li.forEach(element=>element.classList.remove('active'))
                $node.classList.add('active')

                            
                this.$image.removeAttribute('style')
                // console.log($node.children[0])
                // console.log($node.children[1])
                let $style = $node.children[0].getAttribute('style')  //把 li的url 赋值给 this.$image
                this.$image.setAttribute('style',`${$style}`)
                this.title.innerText = $node.children[1].innerText
                this.$play.classList.remove('active')
                this.$zanting.classList.add('active')
           }
           this.$next.onclick = () =>{
                let index =  [...this.$$li].indexOf($('.item .active'))
                console.log(index)
                this.$$li.forEach($li =>{
                    if($li.getAttribute('class') === 'active'){
                        let index =  [...this.$$li].indexOf($('.item .active'))
                        let nextli = this.$$li[(index+1)].children[0]
                        let nexth3 = this.$$li[(index+1)].children[1]
                        let imgurl = nextli.getAttribute('style')
                        this.$image.setAttribute('style',`${imgurl}`)
                        this.title.innerText = nexth3.innerText

                    }
                })
                this.$$li[index].classList.remove('active')
                this.$$li[(index+1)].setAttribute('class','active')
           }
       })
    }
}
Play.init()