import { useParams } from "react-router-dom";





const ProfilePage = () => {
    const { id } = useParams();

    return(
        <div>
            <h1>Profile: {id}</h1>
        </div>
    );
};

export default ProfilePage;