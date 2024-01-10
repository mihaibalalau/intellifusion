import classlist from "zanubio/utils/classlist";

const Image = ({ className, ...props }) => {
    return (
        <>
            <img {...props} className={classlist(className, 'img')} />
        </>
    );
}

export default Image;
