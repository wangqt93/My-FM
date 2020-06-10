console.log('drfds')
const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)
function cb_list(data){
	let arr = data.song_list
	console.log(arr)
	arr.forEach(node=>{
		let $url=node.album_500_500
		let $name = node.album_title
		let $li = document.createElement('li')
		let $div = document.createElement('div')
		let $h3 = document.createElement('h3')
		$div.setAttribute('class','cover')
		$div.setAttribute('style',`background-image:url(${$url})`)
		$h3.innerHTML = $name
		let $ul = document.querySelector('#image .item')
		$li.appendChild($div)
		$li.appendChild($h3)
		$ul.appendChild($li)
	})
	return data
}
const Footer = {
	init(){
		this.$leftbtn = $('.leftbtn')
		this.$rightbtn = $('.rightbtn')
		this.$ul = $('.item')
		this.$image = $('#image')
		this.imglength = this.$image.offsetWidth
		// this.sur = Math.ceil(this.$ul.offsetWidth / this.$image.offsetWidth)-1     // 图片列表在一个方向上，可以点击的次数为Math.ceil(this.$ul.offsetWidth / this.$image.offsetWidth)；减1是去掉第一次点击按钮的那一次数
		this.num = 0
		this.move = this.imglength 
		this.sur()
		this.bind()
	},
	sur(){
		if(this.$ul.offsetWidth % this.$image.offsetWidth == 0){                       //   
			return sur = this.$ul.offsetWidth / this.$image.offsetWidth -1
		}else {
			return sur = Math.ceil(this.$ul.offsetWidth / this.$image.offsetWidth)-1 
		}
	},
	bind(){
		this.$leftbtn.onclick = () =>{  
			console.log(this.sur())       
			if(this.num == 0){     //如果num=0,代表是第一次点击按钮 ，之后num++
				this.$ul.style.left = "-" + this.move + "px"
				this.num++
			}else if(this.num>0 && this.num < this.sur()){     //如果不是第一次点击（num != 0）,并且可以点击次数上限是（this.sur） 
				this.imglength = this.imglength + this.move
				this.$ul.style.left = "-" + this.imglength + "px"
				this.num++
			}
			// console.log(this.num)
			// console.log(this.imglength)
		}
		this.$rightbtn.onclick = () =>{
			if(this.num>0 && this.num != 1){     //this.num >=2
				this.imglength = this.imglength - this.move
				this.$ul.style.left = "-" + this.imglength + "px"
				this.num--
			}else if(this.num == 1){
				this.$ul.style.left = 0 + "px"
				this.num--
			}
			// console.log(this.num)
			// console.log(this.imglength)
		}
	}
}
const Btn = {
	init(){
		this.$play = $('.icon-play')
		this.$zanting = $('.icon-zanting')
		this.$love = $('.icon-love')
		this.bind()
	},
	bind(){
		this.$play.onclick = () =>{
			this.$play.classList.remove('active')
			this.$zanting.classList.add('active')
		}
		this.$zanting.onclick = () =>{
			this.$zanting.classList.remove('active')
			this.$play.classList.add('active')
		}
		this.$love.onclick = () =>{
			if(this.$love.getAttribute('class') === "iconfont icon-love show"){
				this.$love.classList.remove('show')
			}else{
				this.$love.classList.add('show')
			}
			
		}

	}
}








const Music = {
	init(){
		[...arguments].forEach(Module=>Module.init())
	}

}
Music.init(Footer,Btn)







//得到元素的宽高
// calc()



