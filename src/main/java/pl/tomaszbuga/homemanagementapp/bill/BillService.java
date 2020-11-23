package pl.tomaszbuga.homemanagementapp.bill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class BillService {
    private final BillRepository billRepository;
    private LocalDate date = LocalDate.now();

    @Autowired
    public BillService(BillRepository billRepository) {
        this.billRepository = billRepository;
    }
    public List<Bill> listOfBills() {
        return billRepository.findAll();
    }

    public void createBill(Bill bill) {
        billRepository.save(bill);
    }

    public Bill getBillById(Long id){
        return billRepository.getOne(id);
    }

    public void deleteBillById(Long id){
        billRepository.deleteById(id);
    }

    public void setBillAsPayed(Long id) {
        Bill bill = billRepository.getOne(id);
        bill.setPayed(true);
        bill.setCompletionDate(Date.valueOf(date));
        billRepository.save(bill);
    }
}
