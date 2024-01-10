const classlist = (...args) => {
    return args.filter(cls => !!cls).join(' ');
}

export default classlist;