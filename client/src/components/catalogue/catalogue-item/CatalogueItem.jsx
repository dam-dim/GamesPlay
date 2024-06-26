import { Link } from "react-router-dom";

export function CatalogueItem({ title, category, imageUrl, _id }) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link
                    to={`/catalogue/${_id}/details`}
                    className="details-button"
                >
                    Details
                </Link>
            </div>
        </div>
    );
}
