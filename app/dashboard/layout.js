export default function DashboardLayout({ children }) {
    return (
        <section>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </section>
    );
}
