
BEGIN
    FOR vip_rec IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    ) LOOP
        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = vip_rec.CustomerID;
    END LOOP;

    COMMIT;
END;
/
