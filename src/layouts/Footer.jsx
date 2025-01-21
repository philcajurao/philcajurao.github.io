const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-300 text-base-content p-4 leading-7">
            <aside>
                <p className="flex flex-col sm:flex-row items-center justify-center">
                    <span>Copyright © {new Date().getFullYear()} &nbsp;</span>
                    <span className="hidden sm:block">-</span>
                    <span>&nbsp;Made with ❤️ by &nbsp;
                        <span className="border p-1">philcajurao.</span>
                    </span>
                </p>
            </aside>
        </footer>
    );
}

export default Footer;
