import '../styles/Sidebar.css';

const SideBar = () => {
    const scroll = () => {
        let progress = document.getElementById('progressbar');
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function () {
            let progressHeight = (window.pageYOffset / totalHeight) * 100;
            progress.style.height = progressHeight + '%';
        };
    };

    return (
        <>
            <div id='progressbar' onScroll={scroll()}></div>
            <div id='scrollpath'></div>
        </>
    );
};

export default SideBar;
