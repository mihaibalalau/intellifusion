import classlist from "zanubio/utils/classlist";

const H3 = ({ className, ...props }) => {
    return (
        <h3 {...props} className={classlist(className, 'h3')}>

        </h3>
    );
}

export default H3;
