import {Picture} from "../components/Picture";

export function PicturesPage(props) {

    const PICTURES_DATA = [
        {
            id: 1,
            credit:
                "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            author: "Aziz Acharki",
            name: "763.jpg"
        },
        {
            id: 2,
            credit:
                "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            author: "Aziz Acharki",
            name: "3549286.png"
        },
        {
            id: 3,
            credit:
                "https://unsplash.com/@yan_slg?utm_source=unsplash&utm_medium=referral&utmcontent=creditCopyText",
            author: "Boudhayan Bardhan",
            name: "download.jpg"
        },
        {
            id: 4,
            credit:
                "https://unsplash.com/@mkaminski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
            author: "Madison Kaminski",
            name: "Smiley.svg.png"
        },
    ];

    return (
        <div>
            {PICTURES_DATA.map(p => <Picture key={p.id} picture={p}/>)}
        </div>
    );
}
