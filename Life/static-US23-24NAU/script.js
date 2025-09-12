
document.addEventListener('DOMContentLoaded', function(){
    let init_aos_data_id = 1;

            const container = document.getElementById('container')

            fetch('imageLoader.json').then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data)
                for (imgInfo of data){
                    imgPath = imgInfo.img
                    imgDate = imgInfo.time
                    imgContent = imgInfo.content

                    var orient;
                    if (init_aos_data_id%2 == 0){
                        orient = 'right'
                        fade_orient = 'left'
                    }
                    else{
                        orient = 'left'
                        fade_orient = 'right'
                    }
                    console.log(init_aos_data_id)

                    const insertHTMLContent = `<data-id="${init_aos_data_id}" class="aos-item" data-aos="fade-up-${fade_orient}">
                    <img src="${imgPath}" alt="">
                    <div class="textualContent-${orient}">
                        <hr width="40%" style="color: yellow;">
                        <p style="text-align: center; color: yellow; position: relative; top: -50px;">${imgDate}</p>
                        <p style="color: yellow; text-align: center; position: relative; top: -50px;">${imgContent}</p>
                    </div>`

                    container.insertAdjacentHTML('beforeend', insertHTMLContent)

                    init_aos_data_id = init_aos_data_id + 1
                }
            }).catch((error) => {
                console.log(`Error: ${error}`)
            })

            console.log(`Window Size: ${window.innerWidth}`)

            const imgList = document.getElementsByTagName('img')
            const textHR = []
            const textHL = []
            
            var i = 0;
            for (imgElement of imgList){
                console.log(imgElement)
                imgElement.style.width = '60%'
                imgElement.style.left = '20%'
                imgHeight = imgElement.height
                if (i/2 == 0){
                    textHL.push(imgHeight)
                }
                else{
                    textHR.push(imgHeight)
                }
                i++
            }
            
            const textListR = document.getElementsByClassName('textualContent-right')
            const textListL = document.getElementsByClassName('textualContent-left')

            i = 0
            for (imgTextR of textListR){
                imgTextR.style.right = '-40%'
                imgTextR.style.top = textHR[i]/2 
                i++
            }

            i = 0
            for (imgTextL of textListL){
                imgTextL.style.left = '-40%'
                imgTextL.style.top = textHL[i]/2
                i++
            }
})
