import classlist from "zanubio/utils/classlist";

const H2 = ({ className, ...props }) => {
    return (
        <h2 {...props} className={classlist(className, 'h2')}>

        </h2>
    );
}

export default H2;
