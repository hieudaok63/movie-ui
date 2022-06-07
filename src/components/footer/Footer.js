function Footer() {
    return (
        <>
            <div className="page-container">
                <hr className="mb-5" />
                <div className="flex justify-between px-40 mb-10 text-slate-500 font-medium">
                    <ul>
                        <li>
                            <a href="">Liên hệ</a>
                        </li>
                        <li className="my-4">
                            <a href="">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="">Bản quyền</a>
                        </li>
                    </ul>

                    <ul className="">
                        <li>
                            <a href="">Phim bộ</a>
                        </li>
                        <li className="my-4">
                            <a href="">Phim lẻ</a>
                        </li>
                        <li>
                            <a href="">Phim chiếu rạp</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="">Facebook</a>
                        </li>
                        <li className="my-4">
                            <a href="">Twitter</a>
                        </li>
                        <li>
                            <a href="">Instargram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;
