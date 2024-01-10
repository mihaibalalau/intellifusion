import classlist from "zanubio/utils/classlist";

const H1 = ({ className, ...props }) => {
    return (
        <h1 {...props} className={classlist(className, 'h1')}>

        </h1>
    );
}

export default H1;
