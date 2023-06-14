
#return all the transactions for a particular user
def get_user_transactions(db, address: str):
    fetched_transactions =  db.fetch({"address": address})
    all_transactions = fetched_transactions.items
    while fetched_transactions.last:
        fetched_transactions =  db.fetch({"description?contains": "Random","username": username.lower()}, last=fetched_transactions.last)
        all_transactions += fetched_transactions.items
    return all_transactions

def get_transaction(db, key: str ):
    return db.get(key)

def create_user_transaction(db, transaction: dict):
    db_transaction = db.put(transaction)
    return db_transaction
