// <!-- Section 2 Starts here  -->
let section2 = [
    { image : 'https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d75bbb20e8074e602_Rectangle%20108.jpg', dsc: '4-5 Meals', dis : null },
    { image : 'https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d5fc8ef6e6127d841_Rectangle%20108-1.jpg', dsc : '6-7 Meals', dis : 'Save up to $12'},
    { image : 'https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9c24f1e287b2ea6a19_Rectangle%20108-2.jpg', dsc : '8-9 Meals', dis : 'Save up to $20'},
    { image : 'https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9d58c6a6a96a2ad5ef_Rectangle%20108-3.jpg', dsc : '10-11 Meals', dis : 'Save up to $27'},
    { image : 'https://assets-global.website-files.com/5d03b4e130118314af624b20/6192cc9ccb70a3f88391e136_Rectangle%20108-4.jpg', dsc : '12 Meals', dis : 'Save up to $33'},
]
appendFun(section2)
function appendFun(data){
    data.forEach((elem)=>{

        let box = document.createElement('div');
        box.setAttribute('class','box');

        let image = document.createElement('img');
        image.src = elem.image;
        image.setAttribute('class','image');

        let dsc = document.createElement('h3');
        dsc.innerText = elem.dsc;
        dsc.setAttribute('class','dsc');

        box.append(image,dsc);
        document.getElementById('section2_data').append(box)
    })
}
// <!-- Section 2 Ends here  -->


// <!-- Section 4 Starts here  -->

let section4 = [
    {name : 'Steak Peppercorn', dsc : '500 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg', category : 'Signature Collection'},
    {name : 'HomeyStyle Chicken', dsc : '560 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg', category : 'Signature Collection'},
    {name : 'Cauliflower Shell Beef Bolognese', dsc : '490 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg', category : 'Signature Collection'},
    {name : 'Sausage Baked Penne', dsc : '470 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8bdf3b65081fd159c6_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Savory-Sweet Chicken Teriyaki Bowl', dsc : '480 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8e6dd23b60cb122654_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg', category : 'Signature Collection'},
    {name : 'Protein-Packed Chicken Parm', dsc : '410 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e-p-800.jpeg', category : 'FreshlyFit'},
    {name : 'Golden Oven-Fried Chicken & Mash', dsc : '510 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b94f03e50f2e0d2b7f3_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg', category : 'Signature Collection'},
    {name : 'Zingy Buffalo Chicken', dsc : '470 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg', category : 'FreshlyFit'},
    {name : 'White Bean Turkey Chili Bowl', dsc : '540 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401a005f9f6781262949_production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpeg', category : 'Signature Collection'},
    {name : 'Pork Carnitas', dsc : '480 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba186c67063830ea67a_production-meal-image-7bfd44a5-38ec-4893-a0ff-d93693b1deb9-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Chicken Tikka Masala', dsc : '570 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Masterful Mash (16 oz)', dsc : '160 Cal | Gluten Free | Multi-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640562b4a8d4304d8cd7f_production-meal-image-736d13f8-813c-47a9-91e3-e11eecfeb4ef.jpeg', category : 'Protiens & Sides'},
    {name : 'Masterful Mac & Cheese (15 oz)', dsc : '470 Cal | Gluten Free | Multi-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640534648a3861409719e_production-meal-image-a06ce51f-74b3-429e-8ff1-ada01979e783.jpeg', category : 'Protiens & Sides'},
    {name : '3 Grilled Chicken Breasts (9.75 oz)', dsc : '160 Cal | Gluten Free | Multi-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106404a9ca1f30fe0fbb9a9_production-meal-image-50d04c03-029a-4039-ab75-8aecefbdcf43-p-500.jpeg', category : 'Protiens & Sides'},
    {name : '8 Baked Turkey Meatballs (9.98 oz)', dsc : '110 Cal | Gluten Free | Multi-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064050a510183577a6c7f7_production-meal-image-ea98e43b-5663-49f6-9c00-8f2b23225bd2-p-500.jpeg', category : 'Protiens & Sides'},
    {name : 'Dijon Pork Chop', dsc : '630 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad0d78502030a9da911c_production-meal-image-b70b17ff-88b4-453d-b192-2be3cc18e849-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Grilled Lemon-Tahini Chicken', dsc : '380 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad1017778013d8a88f43_production-meal-image-8c822399-bb64-4643-9c22-9beba7f589dd-p-500.jpeg',category : 'FreshlyFit'},
    {name : 'Pork Chile Colorado', dsc : '570 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad130d02be2c91e3b2b2_production-meal-image-7c022f67-5d91-4212-99a3-799b0049b49d-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Sautéed Green Beans (13 oz)', dsc : '390 Cal | Gluten Free | Multi-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad1646bc1dd6ec928799_production-meal-image-e706d1dc-6ac2-4a50-8676-b028865f0111-p-500.jpeg', category : 'Protiens & Sides'},
    {name : 'Thai Green Curry Bowl', dsc : '420 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad18c6660c69c5c75460_production-meal-image-eea55b43-0737-4923-912f-d2aa340a7bc0-p-500.jpeg', category : "Purely Plant"},
    {name : 'Asian-Inspired Vegetable Stir-Fry', dsc : '480 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad2200f65104303c8992_production-meal-image-48af6169-a821-442b-ae63-e7ec7983864a-p-500.jpeg', category : "Purely Plant"},
    {name : 'BBQ Bison Burger*', dsc : '610 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6be4ee61ff706bdff870_production-meal-image-9e969581-d09c-4617-9b17-d455d23c8952-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Veggie-Loaded Burrito Bake', dsc : '650 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad2925d9627236351220_production-meal-image-857e178e-6526-43e2-a8f3-7b8eb178c3c1-p-500.jpeg', category : "Purely Plant"},
    {name : 'Moroccan-Spiced Harissa Chicken', dsc : '520 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad2c0d02be3bd9e3bdfb_production-meal-image-fc61a508-7383-432b-bd40-4d7f75abe43a-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Very Verde Chicken', dsc : '470 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bfaee61ff381ae00518_production-meal-image-4aa973ed-846f-4957-9341-272c1125725d.jpeg', category : 'FreshlyFit'},
    {name : 'Oven-Glazed Chicken Marsala', dsc : '350 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad33c5711d265eaf919a_production-meal-image-43b9ce48-cbff-4c29-9ee8-58fc3974cdff-p-500.jpeg', category : 'FreshlyFit'},
    {name : 'Creamy Mushroom Risotto', dsc : '460 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bf7fa4a155c27cc8b88_production-meal-image-207ee5a9-50b6-4d3f-a0bb-e31354d0e606-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Wild-Caught Fish Cake', dsc : '570 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad3987f94449997e6051_production-meal-image-938266c6-577c-425f-ae6f-b95ef5864266-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Bistro French Onion Chicken', dsc : '630 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad3cbc3913e6f1d13cf2_production-meal-image-0287e25c-7e2a-47fd-acef-ebaff360e858-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Chicken Cordon Bleu', dsc : '710 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bf10a8aa972b7670255_production-meal-image-8f27cccd-b0db-405a-9341-3f4adabcbe9c.jpeg', category : 'Signature Collection'},
    {name : 'Pesto Cauliflower Shells & Sausage', dsc : '590 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad4187f9440d777e6666_production-meal-image-2510ecf4-704d-49f8-abc4-d63c74a28eda-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Flame-Seared Top Blade Steak', dsc : '610 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62809eb45545da00b75350ce_production-meal-image-25f9ce2d-ca21-499e-a140-8d59b4733ec2-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Indian-Spiced Red Lentil Dal', dsc : '620 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad48c308b87e4282889a_production-meal-image-c2bd7c69-3db7-40c1-8740-e86f50357fcb-p-500.jpeg', category : "Purely Plant"},
    {name : 'Cayenne & Buttermilk Chicken Bowl', dsc : '450 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad52016832a17a0ed8c6_production-meal-image-fd7af104-307e-4bae-9737-75139b299a63-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Romesco Grilled Chicken', dsc : '550 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad55288ce35464880759_production-meal-image-c87d5ef6-072c-4e75-a8e1-fef772ef1b13-p-500.jpeg', category : 'FreshlyFit'},
    {name : 'Creamy Marinara Lentil Pasta', dsc : '520 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62809eae991696388751312b_production-meal-image-61221a9e-23cf-4042-a8ff-c15cc1493807-p-500.jpeg', category : "Purely Plant"},
    {name : 'Cuban Mojo Shrimp', dsc : '410 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62809ed29666d0adc9cdc607_production-meal-image-aa45ad57-f3bd-41bf-b74b-7906066bdd24-p-500.jpeg', category : 'FreshlyFit'},
    {name : 'Swede-ish Meatbal', dsc : '630 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad5ee5b98fe8a2bade9f_production-meal-image-4663a574-d74a-4854-a881-ef4da5b24cee-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Tex-Mex Grilled Chicken', dsc : '550 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad60c6660c1e1bc77614_production-meal-image-74a2ccd1-00a7-40df-b3cf-df2e105b657d-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Cheesy Cauliflower Pasta Primavera', dsc : '400 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad637afcafc6e2cf6648_production-meal-image-ba7e2331-ca9d-479f-ab7c-8b09aa991c99-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Summertime Chicken Risotto', dsc : '570 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad6725d96231043543ed_production-meal-image-ae80f7c2-5bf8-4cbb-8bfc-e7c428a74d65-p-500.jpeg', category : 'Signature Collection'},
    {name : 'Three-Cheese Turkey Lasagna', dsc : '580 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad6a0aea63294ec3d01c_production-meal-image-e995764b-5a44-4fb9-aae1-06e1901dc39a-p-500.jpeg', category : 'Signature Collection'},
    {name : 'BBQ-Glazed Turkey Meatloaf', dsc : '580 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad6d3127037b5fcc80be_production-meal-image-3ec5fbfe-a717-4ef5-9d85-e071b2fab603-p-500.jpeg', category : 'FreshlyFit'},
    {name : 'Baked Turkey Meatballs & Zoodles', dsc : '360 Cal | Gluten Free | Single-Serve', image : 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106408537852f1be32d5466_production-meal-image-86a5a9df-909d-4034-b6fa-6b48e5d110cf-p-500.jpeg', category : 'FreshlyFit'},
]
section4_append(section4)

function section4_append(data){
document.getElementById('section4_data').innerHTML = null;
    data.forEach((elem)=>{

        let sec4_box = document.createElement('div');
        sec4_box.setAttribute('class','sec4_box');

        let sec4_img = document.createElement('img');
        sec4_img.src = elem.image;
        sec4_img.setAttribute('class','sec4_img');

        let name = document.createElement('h4');
        name.innerText = elem.name;
        name.setAttribute('class','name');

        let sec4_dsc = document.createElement('p');
        sec4_dsc.innerText = elem.dsc;
        sec4_dsc.setAttribute('class','sec4_dsc');

        sec4_box.append(sec4_img,name,sec4_dsc);
        document.getElementById('section4_data').append(sec4_box)
    })
}
section4_append(section4)
let x = document.getElementById('menu_category');
x.addEventListener('change',myMenu)

function myMenu( ){
if(x.value == 'All Meals')
{
section4_append(section4)
}
else{
let filter =  section4.filter(function(elem){
    return elem.category == x.value;
})
console.log(filter);
section4_append(filter)
}
}
/*  <!-- Section 4 Ends here  --> */

/*  <!-- Section 5 Starts here  --> */

function sec5( ){
      let section5_Data = [
        {image : 'https://assets-global.website-files.com/5d03b4e130118314af624b20/620001104582091be7236479_Freshly_Iconography_DietaryIcons-03-p-500.png',
        name : 'Purely Plant',
        dsc : 'Plant-based meals for everyone',
        lm : 'Learn More'
        },

        {image : 'https://assets-global.website-files.com/5d03b4e130118314af624b20/6200014b6c9c4f739d8a120f_Freshly_Iconography_DietaryIcons-05-p-500.png',
        name : 'Gluten Free',
        dsc : 'Certified by the Gluten Intolerance Group',
        lm : 'Learn More'
        },

        {image : 'https://assets-global.website-files.com/5d03b4e130118314af624b20/62000182acc5e0f3435178cb_Freshly_Iconography_DietaryIcons-02-p-500.png',
        name : 'Dairy Free Meals',
        dsc : 'Dairy free prepared meals for all tastes',
        lm : 'Learn More'
        },

        {image : 'https://assets-global.website-files.com/5d03b4e130118314af624b20/620002995a9c84ce8cc5dc3b_Freshly_Iconography_DietaryIcons-01-p-500.png',
        name : 'Carb-Smart',
        dsc : 'Chef-crafted low-carb meals',
        lm : 'Learn More'
        },

        {image : 'https://assets-global.website-files.com/5d03b4e130118314af624b20/620002cf09966d7359a8b2e8_Freshly_Iconography_DietaryIcons-04-p-500.png',
        name : 'Calorie-Conscious',
        dsc : 'Low-calorie meal plan with perfect portions',
        lm : 'Learn More'
        },
    ]
    appendSec5(section5_Data)
}
sec5( );

function appendSec5(data ){
    console.log(data);

    data.forEach((elem)=>{

        let sec5box = document.createElement('div');
        sec5box.setAttribute('class','sec5box');

        let sec5_image = document.createElement('img');
        sec5_image.src = elem.image;
        sec5_image.setAttribute('class', 'sec5_image');

        let imgdiv = document.createElement('div');
        imgdiv.append(sec5_image)
        imgdiv.setAttribute('class', 'imgdiv');

        let sec5_name = document.createElement('h2');
        sec5_name.textContent = elem.name;
        sec5_name.setAttribute('class', 'sec5_name');

        let sec5_dsc = document.createElement('p');
        sec5_dsc.textContent = elem.dsc;
        sec5_dsc.setAttribute('class', 'sec5_dsc');

        let dscdiv = document.createElement('div');
        dscdiv.append(sec5_dsc)
        dscdiv.setAttribute('class', 'dscdiv');

        let lm = document.createElement('p');
        lm.textContent = elem.lm;
        lm.setAttribute('class', 'lm');

        sec5box.append(imgdiv,sec5_name,dscdiv,lm);
        document.getElementById('section5_data').append(sec5box)
    })
}



