// import React from 'react'
// import { useSelector } from 'react-redux';

// const ProductComponent = () => {

//     const products = useSelector((state) => state.allProducts.products);

//     const renderList = products.map(product => {
//         const { id, title, price, category, image } = product;

//         return (<div className="four column wide" key={id}>
//             <div className="ui link cards">
//                 <div className="card" >
//                     <div className="image"><img src={image} alt={title}></img></div>
//                     <div className="content"
//                         // style={{ "margin-top": "19.5rem" }, { "width": "300px" }}
//                     >
//                         <div className="header">{title}</div>
//                         <div className="meta price">${price}</div>
//                         <div className="meta">{category}</div>
//                     </div>
//                 </div>
//             </div>

//         </div>);
//     });

//     return (
//         <>{renderList}</>
//     )

// };

// export default ProductComponent;

//-------->using bootstrap<---------

import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./ProductComponent.css";

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);
    console.log(products)

    const renderList = products.map(product => {
        const { id, title, price, category, image } = product;

        return (
           
            <div className='cards' key={id}>
                <Link to={`/product/${id}`} >
                    <div className="card" >
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{"font-style":"none"}}>{title}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{price}$</li>
                            <li className="list-group-item">{category}</li>
                        </ul>
                    </div>
                </Link>
            </div>

            // </div>
        );
    });

    return (
        <>{renderList}</>
    )

};

export default ProductComponent;



// using material ui

// import React from 'react'
// import { useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


// // const ProductComponent = () => {
// //     return (
// //         <div>
// //             {renderList}
// //         </div>
// //     )
// // }



// const ProductComponent = () => {

//     const products = useSelector((state) => state.allProducts.products);
//     const useStyles = makeStyles({
//         root: {
//             maxWidth: 345,
//         },
//         media: {
//             height: 140,
//         },
//     });



//     const renderList = products.map(product => {
//         const { id, title, price, category, image } = product;

//         const MediaCard = () => {
//             const classes = useStyles();

//             return (
//                 <Card className={classes.root} >
//                     <CardActionArea>
//                         <CardMedia
//                             className={classes.media}
//                             image={image}
//                             title="Contemplative Reptile"
//                         />
//                         <CardContent>
//                             <Typography gutterBottom variant="h5" component="h2">
//                                 {title}
//                             </Typography>
//                             <Typography variant="body2" color="textSecondary" component="p">
//                                 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//                                 across all continents except Antarctica
//                             </Typography>
//                         </CardContent>
//                     </CardActionArea>
//                     <CardActions>
//                         <Button size="small" color="primary">
//                             {price}
//                         </Button>
//                         <Button size="small" color="primary">
//                             {category}
//                         </Button>
//                     </CardActions>

//                 </Card>
//             );

//         }
//     });

//     MediaCard();

//     return (
//         <>

//             {renderList}</>
//     )
// };

// export default ProductComponent

