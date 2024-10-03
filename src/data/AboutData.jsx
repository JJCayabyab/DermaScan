// images for "our technology"
import tech1 from '../assets/images/about/tech1.png'
import tech2 from '../assets/images/about/tech2.png'

// image for mission
import mission from '../assets/images/about/mission.png'

//images for "how it works"

import process1 from '../assets/images/about/process1.png'
import process2 from '../assets/images/about/process2.png'
import process3 from '../assets/images/about/process3.png'
import process4 from '../assets/images/about/process4.png'
import process5 from '../assets/images/about/process5.png'


export const aboutData = {

    mission: [
        {
            info: 'Our mission is to harness the power of advanced learning technologies to revolutionize the early detection and classification of facial skin diseases. By integrating deep learning models like AlexNet and the XGBoost classifier, we aim to provide accessible, reliable, and fast diagnostic tools that empower individuals and healthcare professionals. Our goal is to improve patient outcomes through early intervention, ensuring that skin conditions are identified accurately and treated promptly, ultimately enhancing the quality of life for those affected',
            img: mission
        }
    ],
    technology: [
        {
            info: 'AlexNet is a groundbreaking deep learning architecture that utilizes Convolutional Neural Networks (CNNs) for image classification. It consists of multiple convolutional layers followed by fully connected layers, allowing it to effectively extract features from images and recognize complex patterns. With innovative techniques like Rectified Linear Units (ReLU) and dropout to prevent overfitting, AlexNet excels in handling large-scale image classification tasks.',
            img: tech1
        },
        {
            info: 'XGBoost, or Extreme Gradient Boosting, is an advanced machine learning algorithm known for its speed and efficiency in classification and regression tasks. It builds an ensemble of decision trees, each correcting errors from the previous ones, leading to highly accurate predictions. By employing gradient boosting and regularization techniques, XGBoost effectively mitigates overfitting, making it a powerful tool for complex classification problems. In our technology, it enhances the classification accuracy of facial skin diseases when integrated with AlexNet.',
            img: tech2
        }
    ],

    process: [
        {
            number: 1,
            img:process1,
            info:`The system accepts an image of the user's face showing a skin condition.`
        },
        {
            number: 2,
            img:process2,
            info:`The image processing steps involve data augmentation to create diverse training samples, K-means clustering to segment the image and isolate relevant regions, normalization to scale pixel values for improved model performance, and resizing the images to 227x227 pixels the AlexNet model.`
        },
        {
            number: 3,
            img:process3,
            info:`The AlexNet model processes the image through several convolutional layers to extract detailed features like edges, textures, and patterns.`
        },
        {
            number: 4,
            img:process4,
            info:`The extracted features are passed to the XGBoost classifier, which categorizes the image into one of the predefined skin disease classes (e.g., acne, eczema, psoriasis).`
        },
        {
            number: 5,
            img:process5,
            info:`The system displays the predicted classification of the facial skin disease based on the processed image, helping to inform diagnosis and treatment decisions.`
        }
    ]


}