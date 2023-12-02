jQuery.fn.cart=function(_){var t=jQuery.extend({},{delete:!1},_),a=t.Content,e={init:function(){e.getCart()},getCart:function(){jQuery.ajax({method:"GET",url:"/web_api/cart/"+e.getDataSession()}).done(function(_,t,s){jQuery(a).html(" ");var r=e.updatePrice(_,r);e.showCart(_,a),e.showResume(r.totalCart)}).fail(function(_,t,s){404==jQuery.parseJSON(_.responseText).code&&(jQuery(a).html(`
                    <div class="empty-content d-flex flex-column">
                        <div class="empty-header">
                            <h2 class="d-block title text-center mb-4">Sua sacola esta vazia</h2>
                            <p class="d-block text text-center">Para efetuar a compra, navegue pelo site ou use a busca para encontrar seus produtos desejados.</p>
                        </div>
                        <img class="m-auto d-block img-fluid" src="https://images.tcdn.com.br/files/1262505/themes/23/img/sacola.svg" alt="Carrinho vazio" />
                        <a class="close-cart btn" href="javascript:void(0)">Escolher produto</a>
                    </div>                
                `),jQuery('[data-cart="amount"]').text("0"),jQuery('[data-cart="price"]').text("0,00"),e.showResume("0,00"))})},showCart:function(_,t){var a;jQuery(_).each(function(_){var e=`
            <div class="prod d-flex align-items-stretch flex-wrap prod-${this.Cart.product_id}">
                <a class="image" href="${this.Cart.product_url.https}" alt="${this.Cart.product_name}">
                    <img class="img-fluid" loading="lazy" src="${a=this.Cart.product_image.thumbs?this.Cart.product_image.thumbs[90].https:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}">
                </a>
                <div class="flex-fill information d-flex flex-column">
                    <h3 class="d-flex justify-content-between align-items-center title">
                        <a href="${this.Cart.product_url.https}" alt="${this.Cart.product_name}" class="prod-name">
                            ${this.Cart.product_name}
                        </a>
                        <a onclick="jQuery('${t}').cart({delete: true, removeId: ${this.Cart.product_id}, variantID: ${this.Cart.variant_id}, Content: '${t}' });">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                <g clip-path="url(#clip0_71_1288)">
                                    <path d="M4.8125 5.3125C4.92853 5.3125 5.03981 5.35859 5.12186 5.44064C5.20391 5.52269 5.25 5.63397 5.25 5.75V11C5.25 11.116 5.20391 11.2273 5.12186 11.3094C5.03981 11.3914 4.92853 11.4375 4.8125 11.4375C4.69647 11.4375 4.58519 11.3914 4.50314 11.3094C4.42109 11.2273 4.375 11.116 4.375 11V5.75C4.375 5.63397 4.42109 5.52269 4.50314 5.44064C4.58519 5.35859 4.69647 5.3125 4.8125 5.3125ZM7 5.3125C7.11603 5.3125 7.22731 5.35859 7.30936 5.44064C7.39141 5.52269 7.4375 5.63397 7.4375 5.75V11C7.4375 11.116 7.39141 11.2273 7.30936 11.3094C7.22731 11.3914 7.11603 11.4375 7 11.4375C6.88397 11.4375 6.77269 11.3914 6.69064 11.3094C6.60859 11.2273 6.5625 11.116 6.5625 11V5.75C6.5625 5.63397 6.60859 5.52269 6.69064 5.44064C6.77269 5.35859 6.88397 5.3125 7 5.3125ZM9.625 5.75C9.625 5.63397 9.57891 5.52269 9.49686 5.44064C9.41481 5.35859 9.30353 5.3125 9.1875 5.3125C9.07147 5.3125 8.96019 5.35859 8.87814 5.44064C8.79609 5.52269 8.75 5.63397 8.75 5.75V11C8.75 11.116 8.79609 11.2273 8.87814 11.3094C8.96019 11.3914 9.07147 11.4375 9.1875 11.4375C9.30353 11.4375 9.41481 11.3914 9.49686 11.3094C9.57891 11.2273 9.625 11.116 9.625 11V5.75Z" fill="#151515"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6875 3.125C12.6875 3.35706 12.5953 3.57962 12.4312 3.74372C12.2671 3.90781 12.0446 4 11.8125 4H11.375V11.875C11.375 12.3391 11.1906 12.7842 10.8624 13.1124C10.5342 13.4406 10.0891 13.625 9.625 13.625H4.375C3.91087 13.625 3.46575 13.4406 3.13756 13.1124C2.80937 12.7842 2.625 12.3391 2.625 11.875V4H2.1875C1.95544 4 1.73288 3.90781 1.56878 3.74372C1.40469 3.57962 1.3125 3.35706 1.3125 3.125V2.25C1.3125 2.01794 1.40469 1.79538 1.56878 1.63128C1.73288 1.46719 1.95544 1.375 2.1875 1.375H5.25C5.25 1.14294 5.34219 0.920376 5.50628 0.756282C5.67038 0.592187 5.89294 0.5 6.125 0.5H7.875C8.10706 0.5 8.32962 0.592187 8.49372 0.756282C8.65781 0.920376 8.75 1.14294 8.75 1.375H11.8125C12.0446 1.375 12.2671 1.46719 12.4312 1.63128C12.5953 1.79538 12.6875 2.01794 12.6875 2.25V3.125ZM3.60325 4L3.5 4.05163V11.875C3.5 12.1071 3.59219 12.3296 3.75628 12.4937C3.92038 12.6578 4.14294 12.75 4.375 12.75H9.625C9.85706 12.75 10.0796 12.6578 10.2437 12.4937C10.4078 12.3296 10.5 12.1071 10.5 11.875V4.05163L10.3967 4H3.60325ZM2.1875 3.125V2.25H11.8125V3.125H2.1875Z" fill="#151515"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_71_1288">
                                    <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                            </svg> 
                        </a>                       
                    </h3>
                    <div class="d-flex justify-content-between align-items-stretch">
                        <span>
                            <span class="prod-price"><strong> R$ ${this.Cart.price}</strong></span>
                        </span>
                        <span class="d-flex flex-column">
                            <label class="d-block">Quantidade: ${this.Cart.quantity}</label> 
                        </span>
                    </div>
                </div>
            </div>`;jQuery(t).append(e)})},showResume:function(_){"0,00"==_&&document.getElementsByClassName("resumeCart")[0].remove();var a=`
        <div class="resumeCart d-flex flex-column">
            <h3 class="d-flex heading align-items-center justify-content-between">  
                <span>Total:</span>
                <span class="totalCart"><strong>R$<span data-cart="price">${_}</span></strong></span>
            </h3>
            <span class="d-flex flex-wrap actions">
                <a href="${document.getElementsByClassName("mini-cart")[0].dataset.cart}" class="btn flex-fill secondary show-cart">Ver Sacola</a>
                <a href="/loja/carrinho.php" class="btn flex-fill primary">FINALIZAR COMPRA</a>
            </span>   
        </div>`;jQuery(t.resumeContent).html(a)},getDataSession:function(){var _=jQuery("html").attr("data-session");return(null==_||""===_)&&(_=dataLayer[0].visitorId),_},updatePrice:function(_){var t={quantity:0,price:0};jQuery.each(_,function(_,a){t.quantity=t.quantity+parseInt(a.Cart.quantity),t.price=t.price+parseFloat(a.Cart.price)*a.Cart.quantity});var a=t.price.toFixed(2),a=a.toString(),e=a.replace(".",",");return jQuery('[data-cart="amount"]').text(t.quantity),jQuery('[data-cart="price"]').text(e),{totalCart:e,totalQtd:t.quantity}},removeCart:function(_,t,a){jQuery.ajax({method:"DELETE",url:"/web_api/carts/"+e.getDataSession()+"/"+_+"/"+t}).done(function(_,t,a){e.getCart()})}};setTimeout(function(){e.init()},500),jQuery('[data-app="product.buy-button"]').on("click",function(){setTimeout(function(){e.getCart()},500)}),t.delete&&e.removeCart(t.removeId,t.variantID,t.Content)};